import { chromium, devices } from "playwright";

const results = [];

function pass(name) {
  results.push({ name, ok: true });
}

function fail(name, detail) {
  results.push({ name, ok: false, detail });
}

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({ ...devices["iPhone 13"] });
const page = await context.newPage();

try {
  await page.goto("http://127.0.0.1:3000/", {
    waitUntil: "networkidle",
    timeout: 30000,
  });

  const viewport = page.viewportSize();
  if (viewport?.width === 390) pass("iPhone 13 viewport");
  else fail("iPhone 13 viewport", `got ${viewport?.width}x${viewport?.height}`);

  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1
  );
  if (!overflow) pass("no horizontal overflow on home");
  else fail("no horizontal overflow on home");

  if (await page.locator("h1", { hasText: "Stay in the Play." }).isVisible()) {
    pass("hero headline visible");
  } else {
    fail("hero headline visible");
  }

  const menuBtn = page.getByRole("button", { name: /navigation menu/i });
  if (await menuBtn.isVisible()) pass("mobile menu button visible");
  else fail("mobile menu button visible");

  await menuBtn.click();
  const mobileNav = page.getByRole("navigation", { name: "Mobile navigation" });
  const contactLink = mobileNav.getByRole("link", { name: "Contact" });

  if (await contactLink.isVisible()) pass("mobile menu opens with links");
  else fail("mobile menu opens with links");

  await contactLink.click();
  await page.waitForTimeout(1500);

  const contactTop = await page.locator("#contact").evaluate((el) => el.getBoundingClientRect().top);
  if (contactTop >= 0 && contactTop < 120) pass("mobile nav scrolls to contact");
  else fail("mobile nav scrolls to contact", `contact top=${Math.round(contactTop)}`);

  await page.goto("http://127.0.0.1:3000/#faq", { waitUntil: "networkidle" });
  const faqBtn = page.locator("#faq button").first();
  if (await faqBtn.isVisible()) {
    await faqBtn.click();
    await page.waitForTimeout(400);
    pass("FAQ accordion clickable");
  } else {
    fail("FAQ accordion clickable");
  }

  await page.goto("http://127.0.0.1:3000/#contact", { waitUntil: "networkidle" });
  await page.waitForTimeout(1000);
  const message = page.getByLabel(/^message/i);
  const submit = page.getByRole("button", { name: /start your journey/i });

  if ((await message.isVisible()) && (await submit.isVisible())) {
    pass("contact form visible on mobile");
  } else {
    fail("contact form visible on mobile");
  }

  await submit.click();
  if (await page.locator("text=Athlete name is required").isVisible()) {
    pass("form validation works on mobile");
  } else {
    fail("form validation works on mobile");
  }

  await page.goto("http://127.0.0.1:3000/privacy", { waitUntil: "networkidle" });
  const privacyOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1
  );
  if (
    !privacyOverflow &&
    (await page.getByRole("heading", { name: "Privacy Policy" }).isVisible())
  ) {
    pass("privacy page mobile");
  } else {
    fail("privacy page mobile");
  }

  await page.goto("http://127.0.0.1:3000/does-not-exist", { waitUntil: "networkidle" });
  if (await page.getByRole("heading", { name: /off the trail/i }).isVisible()) {
    pass("404 page mobile");
  } else {
    fail("404 page mobile");
  }
} catch (error) {
  fail("unexpected error", String(error));
} finally {
  await browser.close();
}

const failed = results.filter((result) => !result.ok);
console.log(
  JSON.stringify(
    {
      passed: results.filter((result) => result.ok).length,
      failed: failed.length,
      results,
    },
    null,
    2
  )
);
process.exit(failed.length ? 1 : 0);
