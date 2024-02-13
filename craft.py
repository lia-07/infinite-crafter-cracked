import sys
import requests

print("⚡️ Welcome to Infinite Craft Cracked")

if len(sys.argv) > 2:
    item1 = sys.argv[2]
    item2 = sys.argv[3]
else:
    item1 = input("Enter first item: ")
    item2 = input("Enter second item: ")

def craft_items(item1, item2):
    print(f"Crafting {item1} and {item2}...")
    try:
        response = requests.get(
            f"https://neal.fun/api/infinite-craft/pair?first={item1}&second={item2}",
            headers={
                "accept": "*/*",
                "accept-language": "en-US,en;q=0.9",
                "cache-control": "no-cache",
                "pragma": "no-cache",
                "sec-ch-ua": '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": '"macOS"',
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "Referer": "https://neal.fun/infinite-craft/",
                "Referrer-Policy": "strict-origin-when-cross-origin",
            }
        )

        if response.ok:
            data = response.json()
            print(f"Result: {data['emoji']} {data['result']}!")
            if data['isNew']:
                print("That's a new craft!")
        else:
            print(f"Crafting failed: {response.status_code} {response.reason}")
    except Exception as e:
        print(f"Crafting failed: {e}")

craft_items(item1, item2)
