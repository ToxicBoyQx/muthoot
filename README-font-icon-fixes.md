# Muthoot Finance Clone - Font & Icon Fixes

This package provides a comprehensive solution to ensure that your Muthoot Finance clone website's fonts, icons, and typography match 100% with the original [Muthoot Finance website](https://www.muthootfinance.com/).

## What's Included

- **Font Matching**: Proper implementation of the Frutiger font family used on the original website
- **Icon Matching**: Exact replicas of FontAwesome and Material Design icons used by Muthoot Finance
- **Typography Matching**: Precise font sizes, weights, and styles to match the original site
- **Responsive Design**: Media queries to ensure proper font scaling on all devices
- **Automated Application**: Scripts to automatically apply these fixes to all pages

## Files Included

1. **`css/font-fix.css`**: CSS fixes for all font-related styling
2. **`css/icons-fix.css`**: CSS fixes for icon implementation
3. **`js/font-icon-fix.js`**: JavaScript to dynamically apply fixes
4. **`apply-fixes.js`**: Node.js script to automatically apply fixes to all HTML files
5. **`apply-fixes.html`**: Instructions page for manual application

## How to Apply the Fixes

### Method 1: Automatic Application (Recommended)

Run the Node.js script to automatically apply the fixes to all HTML files:

```bash
node apply-fixes.js
```

This will:
- Add the necessary CSS links to the `<head>` section of each HTML file
- Add the JavaScript file to the end of the `<body>` section
- Create backups of all modified files (with .bak extension)

### Method 2: Manual Application

Add the following code to the `<head>` section of each HTML file:

```html
<!-- Font & Icon Fixes to match original website -->
<link rel="stylesheet" href="/css/font-fix.css">
<link rel="stylesheet" href="/css/icons-fix.css">
```

And add this script before the closing `</body>` tag:

```html
<!-- Font & Icon Fix Script -->
<script src="/js/font-icon-fix.js"></script>
```

## Fonts Used

The original Muthoot Finance website uses the Frutiger font family:

1. **FrutigerLTStd55RomanRegular**: For normal text
2. **FrutigerBlack**: For bold/heading text
3. **frutigeb**: For medium-weight text

## Icons Used

The original site uses two main icon libraries:

1. **FontAwesome 4.7.0**: For social media and UI icons
   - Examples: `fa-facebook`, `fa-twitter`, `fa-search`, etc.

2. **Material Design Iconic Font**: For interface elements
   - Examples: `zmdi-chevron-right`, `zmdi-check`, etc.

## Verification

After applying these fixes, you can verify they're working by:

1. Comparing text rendering with the original site
2. Checking that icons appear identical to the original site
3. Verifying that font weights and sizes match across different sections

## Troubleshooting

If you encounter any issues:

1. **Icons not displaying**: Make sure the external font libraries are accessible
2. **Fonts not matching**: Clear your browser cache and reload
3. **Script errors**: Check browser console for any JavaScript errors

## Support

For any questions or issues, please contact the project maintainer.

---

© 2024 Muthoot Finance Clone Project 