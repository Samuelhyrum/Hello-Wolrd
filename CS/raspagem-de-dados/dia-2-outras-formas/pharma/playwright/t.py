from playwright.sync_api import sync_playwright

def run(playwright):
    # Launch Chromium in headless mode
    browser_chromium = playwright.chromium.launch(headless=True)
    page_chromium = browser_chromium.new_page()
    page_chromium.goto('https://example.com')
    page_chromium.screenshot(path='example-chromium.png')
    browser_chromium.close()

    # Launch Firefox in headless mode
    browser_firefox = playwright.firefox.launch(headless=True)
    page_firefox = browser_firefox.new_page()
    page_firefox.goto('https://example.com')
    page_firefox.screenshot(path='example-firefox.png')
    browser_firefox.close()

    # Launch WebKit in headless mode
    browser_webkit = playwright.webkit.launch(headless=True)
    page_webkit = browser_webkit.new_page()
    page_webkit.goto('https://example.com')
    page_webkit.screenshot(path='example-webkit.png')
    browser_webkit.close()

with sync_playwright() as playwright:
    run(playwright)
