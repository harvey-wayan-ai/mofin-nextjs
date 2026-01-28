#!/usr/bin/env python3
"""
Generate custom images for Mofin using HuggingFace API
"""

import requests
import os
import time

# Read HuggingFace token
with open('/root/.huggingface-token', 'r') as f:
    HF_TOKEN = f.read().strip()

API_URL = "https://router.huggingface.co/models/black-forest-labs/FLUX.1-schnell"
headers = {"Authorization": f"Bearer {HF_TOKEN}"}

def generate_image(prompt, output_path, retries=3):
    """Generate image from text prompt"""
    print(f"Generating: {output_path}")
    print(f"Prompt: {prompt}")
    
    for attempt in range(retries):
        try:
            response = requests.post(
                API_URL,
                headers=headers,
                json={"inputs": prompt},
                timeout=60
            )
            
            if response.status_code == 200:
                with open(output_path, 'wb') as f:
                    f.write(response.content)
                print(f"✓ Saved to {output_path}")
                return True
            elif response.status_code == 503:
                print(f"Model loading, waiting... (attempt {attempt+1}/{retries})")
                time.sleep(20)
            else:
                print(f"Error {response.status_code}: {response.text}")
                return False
        except Exception as e:
            print(f"Error: {e}")
            if attempt < retries - 1:
                time.sleep(10)
    
    return False

# Image prompts
images_to_generate = [
    {
        "prompt": "Modern minimalist financial dashboard illustration, clean geometric shapes, purple and pink gradient, futuristic AI analytics, floating charts and graphs, professional fintech aesthetic, vector art style, high quality, 16:9 aspect ratio",
        "output": "public/images/hero-dashboard.jpg"
    },
    {
        "prompt": "Abstract representation of AI financial intelligence, glowing neural network patterns, purple and pink color scheme, data streams, digital finance concept, modern minimalist illustration, professional design, square format",
        "output": "public/images/feature-ai.jpg"
    },
    {
        "prompt": "Secure bank vault with digital locks and encryption symbols, cybersecurity theme, purple blue gradient, shield icon, modern tech illustration, clean professional design, square format",
        "output": "public/images/feature-security.jpg"
    },
    {
        "prompt": "Real-time financial synchronization concept, connected devices showing financial data, purple pink gradient, cloud sync visualization, modern fintech illustration, professional clean design, square format",
        "output": "public/images/feature-sync.jpg"
    }
]

# Generate images
base_dir = "/root/clawd/harvey-projects/mofin-nextjs"
os.chdir(base_dir)

for img_config in images_to_generate:
    success = generate_image(img_config["prompt"], img_config["output"])
    if success:
        time.sleep(5)  # Rate limiting
    else:
        print(f"Failed to generate {img_config['output']}")

print("\n✓ Image generation complete!")
