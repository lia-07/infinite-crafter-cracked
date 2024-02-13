console.log("⚡️ Welcome to Infinite Craft Cracked");

if (Bun.argv[2] && Bun.argv[3]) {
  craftItems(Bun.argv[2], Bun.argv[3]);
} else {
  const item1 = prompt("Enter first item:");
  const item2 = prompt("Enter second item:");
  craftItems(item1!, item2!);
}

async function craftItems(item1: string, item2: string) {
  console.log(`Crafting ${item1} and ${item2}...`);
  try {
    const response = await fetch(
      `https://neal.fun/api/infinite-craft/pair?first=${item1}&second=${item2}`,
      {
        headers: {
          accept: "*/*",
          "accept-language": "en-US,en;q=0.9",
          "cache-control": "no-cache",
          pragma: "no-cache",
          "sec-ch-ua":
            '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          Referer: "https://neal.fun/infinite-craft/",
          "Referrer-Policy": "strict-origin-when-cross-origin",
        },
        body: null,
        method: "GET",
      }
    );

    if (response.ok) {
      const data = await response.json();
      console.log(`Result: ${data.emoji} ${data.result}!`);
      if (data.isNew) {
        console.log("That's a new craft!");
      }
    } else {
      console.error(
        `Crafting failed: ${response.status} ${response.statusText}`
      );
    }
  } catch (error) {
    console.error(`Crafting failed: ${error}`);
    return;
  }
}
