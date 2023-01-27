// Modified from https://github.com/ecklf/tailwindcss-radix
import plugin from 'tailwindcss/plugin';

const dataAttributes = ['disabled', 'highlighted', 'placeholder'];

const namedDataAttributes = {
  align: ['center', 'end', 'start'],
  state: [
    'active',
    'checked',
    'closed',
    'delayed-open',
    'hidden',
    'inactive',
    'indeterminate',
    'instant-open',
    'off',
    'on',
    'open',
    'unchecked',
    'visible',
  ],
  side: ['bottom', 'left', 'right', 'top'],
  orientation: ['horizontal', 'vertical'],
  motion: ['from-end', 'from-start', 'to-end', 'to-start'],
  swipe: ['cancel', 'end', 'move', 'start'],
  'swipe-direction': ['down', 'left', 'right', 'up'],
};

export default plugin.withOptions<{ variantPrefix?: string }>(
  ({ variantPrefix = 'ui' }) =>
    ({ addUtilities, addVariant, e }) => {
      // Adds the following transform origin utilities
      // `--${variantPrefix}-context-menu-content-transform-origin`,
      // `--${variantPrefix}-dropdown-menu-content-transform-origin`,
      // `--${variantPrefix}-hover-card-content-transform-origin `,
      // `--${variantPrefix}-menubar-content-transform-origin`
      // `--${variantPrefix}-popover-content-transform-origin`,
      // `--${variantPrefix}-tooltip-content-transform-origin`,
      const transformOrigins = ['context-menu', 'dropdown-menu', 'hover-card', 'menubar', 'popover', 'tooltip'];

      transformOrigins.forEach((transformOrigin) => {
        addUtilities({
          [`.origin-${variantPrefix}${transformOrigin}`]: {
            'transform-origin': `var(--${variantPrefix}-${transformOrigin}-content-transform-origin)`,
          },
        });
      });

      dataAttributes.forEach((attributeValue) => {
        const variantName = `${variantPrefix}-${attributeValue}`;
        const selector = `data-${attributeValue}`;

        addVariant(`${variantName}`, (({ modifySelectors, separator }) => {
          modifySelectors(({ className }: { className: string }) => {
            return `.${e(`${variantName}${separator}${className}`)}[${selector}]`;
          });
        }) as any);

        addVariant(`group-${variantName}`, (({ modifySelectors, separator }) => {
          modifySelectors(({ className }: { className: string }) => {
            return `.group[${selector}] .${e(`group-${variantName}${separator}${className}`)}`;
          });
        }) as any);

        addVariant(`peer-${variantName}`, (({ modifySelectors, separator }) => {
          modifySelectors(({ className }: { className: string }) => {
            return `.peer[${selector}] ~ .${e(`peer-${variantName}${separator}${className}`)}`;
          });
        }) as any);
      });

      Object.keys(namedDataAttributes).forEach((attributeName) => {
        namedDataAttributes[attributeName as keyof typeof namedDataAttributes].forEach((attributeValue) => {
          const variantName = `${variantPrefix}-${attributeName}-${attributeValue}`;
          const selector = `data-${attributeName}="${attributeValue}"`;

          addVariant(`${variantName}`, (({ modifySelectors, separator }) => {
            modifySelectors(({ className }: { className: string }) => {
              return `.${e(`${variantName}${separator}${className}`)}[${selector}]`;
            });
          }) as any);

          addVariant(`group-${variantName}`, (({ modifySelectors, separator }) => {
            modifySelectors(({ className }: { className: string }) => {
              return `.group[${selector}] .${e(`group-${variantName}${separator}${className}`)}`;
            });
          }) as any);

          addVariant(`peer-${variantName}`, (({ modifySelectors, separator }) => {
            modifySelectors(({ className }: { className: string }) => {
              return `.peer[${selector}] ~ .${e(`peer-${variantName}${separator}${className}`)}`;
            });
          }) as any);
        });
      });

      // Adds the following [width|height] utilities
      // `--${variantPrefix}-accordion-content-[width|height]`,
      // `--${variantPrefix}-collapsible-content-[width|height]`,
      // `--${variantPrefix}-navigation-menu-viewport-[width|height]`,
      const dimensionAttributes = ['accordion-content', 'collapsible-content', 'navigation-menu-viewport'];

      dimensionAttributes.forEach((component) => {
        addUtilities({
          [`.w-${variantPrefix}${component}`]: {
            width: `var(--${variantPrefix}-${component}-width)`,
          },
        });
        addUtilities({
          [`.h-${variantPrefix}${component}`]: {
            height: `var(--${variantPrefix}-${component}-height)`,
          },
        });
      });

      // Adds the following [x|y] utilities
      // `--${variantPrefix}-toast-swipe-end-[x|y]`,
      // `--${variantPrefix}-toast-swipe-move-[x|y]`,
      const tooltipAttributes = ['toast-swipe-end', 'toast-swipe-move'];

      tooltipAttributes.forEach((component) => {
        addUtilities({
          [`.translate-x-${variantPrefix}${component}-x`]: {
            transform: `translateX(var(--${variantPrefix}-${component}-x))`,
          },
        });
        addUtilities({
          [`.translate-y-${variantPrefix}${component}-y`]: {
            transform: `translateY(var(--${variantPrefix}-${component}-y))`,
          },
        });
      });
    }
);
