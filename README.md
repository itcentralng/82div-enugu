# 82nd Division - Chronicle of Commanders

A web application showcasing the history and commanders of the 82nd Division/82nd Airborne Division.

## Features

- **Home Page** (`index.html`): Displays a clickable logo and grid of commanders (4 per row)
- **History Page** (`history.html`): Shows the history of the 82nd Division
- **Biography Pages** (`biography.html`): Individual commander biographies
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## File Structure

```
82 DIV/
├── index.html          # Home page with commanders grid
├── history.html        # Division history page
├── biography.html      # Commander biography template
├── styles.css          # All CSS styling
├── script.js           # JavaScript functionality
└── images/             # Images directory
    ├── 82nd-logo.png   # Division logo (SVG format)
    ├── placeholder.jpg # Generic placeholder
    └── [commander].jpg # Individual commander images (SVG placeholders)
```

## How to Use

1. **Open the application**: Open `index.html` in a web browser
2. **Navigate to History**: Click on the "History" text under the logo
3. **View Commander Biographies**: Click on any commander card to view their biography
4. **Return Home**: Click the logo from any page to return to the home page

## Commander Information

The application includes 8 commanders from different eras:

1. **Major General Roscoe B. Woodruff** (1917-1918) - First commander
2. **Major General George P. Windle** (1918-1919) - WWI conclusion
3. **Major General Omar N. Bradley** (1942-1943) - Transformed to airborne
4. **Major General Matthew B. Ridgway** (1943-1944) - D-Day leader
5. **Brigadier General James M. Gavin** (1944-1948) - "Jumping General"
6. **Major General George W. Casey Sr.** (1967-1970) - Vietnam War era
7. **Major General John W. Foss** (1993-1996) - Post-Cold War
8. **Major General David H. Petraeus** (2000-2002) - Modern era

## Technical Details

- **Pure HTML/CSS/JavaScript**: No external dependencies
- **Responsive Grid**: Automatically adjusts from 4 columns to fewer on smaller screens
- **URL Parameters**: Biography pages use URL parameters to display specific commanders
- **SVG Images**: Placeholder images are SVG format for scalability
- **Military Color Scheme**: Uses military green (#1a472a) and gold (#ffd700)

## Customization

### Adding More Commanders

1. Add commander data to the `commanders` array in `script.js`
2. Create an image file in the `images/` directory
3. The grid will automatically update

### Changing Colors

Update the color variables in `styles.css`:
- Primary color: `#1a472a` (military green)
- Accent color: `#ffd700` (gold)
- Background: `#f4f4f4` (light gray)

### Replacing Images

Replace the SVG placeholder images with actual photographs:
1. Save images in the `images/` directory
2. Use the same filenames as referenced in the commander data
3. Recommended size: 150x150 pixels or larger, square aspect ratio

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design works on mobile devices
- No JavaScript frameworks required

## Notes

- Logo is clickable and returns to home page
- "History" link is prominently displayed under the logo
- Commander cards have hover effects for better user experience
- Biography pages include comprehensive information about each commander
- Error handling included for missing images (falls back to placeholder)# 82div-enugu
