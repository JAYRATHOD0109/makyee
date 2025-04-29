# Next.js Internationalization (i18n) Guide

This document provides a comprehensive guide on how to use the multi-language feature in our Next.js project using next-intl.

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [How to Add New Text](#how-to-add-new-text)
- [How to Use Translations in Components](#how-to-use-translations-in-components)
- [Language Switching](#language-switching)
- [RTL Support](#rtl-support)
- [Best Practices](#best-practices)

## Overview

Our project uses [next-intl](https://next-intl-docs.vercel.app/) for handling internationalization (i18n) in Next.js. This setup allows us to:

- Support multiple languages (currently English and Arabic)
- Handle RTL layouts automatically
- Use a simple JSON-based translation system
- Keep code clean with clear separation of content and presentation

## Project Structure

The main files for the i18n setup are:

```
/
├── messages/
│   ├── en.json
│   └── ar.json
├── src/
│   ├── app/
│   │   └── [locale]/
│   │       └── page.tsx
│   ├── i18n/
│   │   └── routing.ts
│   └── components/
│       └── Hero.tsx (example component)
```

## How to Add New Text

### 1. Adding a New Key-Value Pair

To add new translatable text to the application:

1. Open the appropriate JSON files in the `messages` folder:

   - `messages/en.json` for English
   - `messages/ar.json` for Arabic

2. Add the same key to both files with appropriate translations:

```json
// messages/en.json
{
  "SectionName": {
    "NEW_KEY": "Your English text here"
  }
}
```

```json
// messages/ar.json
{
  "SectionName": {
    "NEW_KEY": "نص باللغة العربية هنا"
  }
}
```

Always maintain the same structure across all language files.

## How to Use Translations in Components

### Basic Usage

Here's how to use translations in React components:

```tsx
import { useTranslations } from "next-intl";

const YourComponent = () => {
  // Get translations for a specific section
  const t = useTranslations("HomePage");

  return (
    <div>
      <h1>
        {t("HERO_TITLE")} <span>MAKYEE</span>
      </h1>
      <p>{t("HERO_DESCRIPTION")}</p>
    </div>
  );
};
```

This implementation leverages next-intl's routing capabilities to handle language switching properly.

## RTL Support

Arabic is a right-to-left (RTL) language. Our project handles RTL layouts automatically with Tailwind CSS utilities:

```tsx
// Example of RTL-aware styling
<div className="ltr:-left-10 rtl:right-0">{/* Content */}</div>
```

- `ltr:` - Style applied in left-to-right languages (like English)
- `rtl:` - Style applied in right-to-left languages (like Arabic)

## Best Practices

1. **Keep keys consistent:** Always use the same keys across all language files.

2. **Use descriptive keys:** Keys should be in UPPERCASE_WITH_UNDERSCORES and describe the content.

3. **Organize by sections:** Group translations by page or component.

4. **Handle pluralization:** For content that changes based on numbers, use the plural forms:

   ```tsx
   t("ITEMS_COUNT", { count: items.length });
   ```

   With corresponding JSON:

   ```json
   {
     "ITEMS_COUNT": "{count, plural, =0 {No items} one {# item} other {# items}}"
   }
   ```

5. **Test all languages:** When adding new features, verify that all supported languages display correctly.

6. **Don't hardcode text:** Always use the translation function for any user-visible text.

7. **Mind the text length:** Some languages (like German) might have longer text than English, so design your UI to accommodate different text lengths.

8. **Use string interpolation when needed:**

   ```tsx
   // In component
   t("WELCOME_MESSAGE", { name: user.name })

   // In JSON
   {
     "WELCOME_MESSAGE": "Welcome, {name}!"
   }
   ```

## Adding a New Language

To add a new language to the project:

1. Create a new JSON file in the `messages` directory, e.g., `fr.json` for French
2. Copy the structure from `en.json` and translate all values
3. Update the `locales` array in the routing configuration file (`src/i18n/routing.ts`):

```typescript
// src/i18n/routing.ts
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // Add your new locale to this array
  locales: ["en", "ar", "fr"],

  // Used when no locale matches
  defaultLocale: "en",
});
```

4. Add the language option to the language switcher component

## Troubleshooting

- **Missing translations:** If a translation is missing, next-intl will show the key instead. Check the console for warnings.
- **RTL issues:** If RTL layout looks incorrect, verify that you're using the `rtl:` and `ltr:` prefixes correctly in your Tailwind classes.
- **Dynamic content:** For dynamic content that includes HTML tags, use the `trans` component instead of the `t` function.

## Resources

- [next-intl Documentation](https://next-intl-docs.vercel.app/)
- [Next.js Internationalization (i18n) Official Docs](https://nextjs.org/docs/advanced-features/i18n-routing)
- [Tailwind CSS RTL Support](https://tailwindcss.com/docs/hover-focus-and-other-states#rtl-support)
