import type { CustomFlowbiteTheme } from "flowbite-react";
import { twMerge } from "tailwind-merge";
import type { Config } from "tailwindcss";

export const standardTailwindConfigThemeExtend: NonNullable<
  Config["theme"]
>["extend"] = {
  colors: {
    // all colors taken from Figma Migration pages, except 950
    primary: {
      DEFAULT: "#3F83F8",
      50: "#EBF5FF",
      100: "#E1EFFE",
      200: "#C3DDFD",
      300: "#A4CAFE",
      400: "#76A9FA",
      500: "#3F83F8",
      600: "#1C64F2",
      700: "#1A56DB",
      800: "#1E429F",
      900: "#233876",
      950: "#000A11",
    },
    secondary: {
      DEFAULT: "#64748b",
      50: "#f8fafc",
      100: "#f1f5f9",
      200: "#e2e8f0",
      300: "#cbd5e1",
      400: "#94a3b8",
      500: "#64748b",
      600: "#475569",
      700: "#334155",
      800: "#1e293b",
      900: "#0f172a",
      950: "#020617",
    },
  },
  animation: {
    heartbeat: "heartbeat 1.5s infinite",
    "progress-bar-increase":
      "progress-bar-increase 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite",
    "progress-bar-decrease":
      "progress-bar-decrease 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite",
  },
  keyframes: {
    heartbeat: {
      "0%, 100%": { transform: "scale(1)" },
      "50%": { transform: "scale(.95)" },
    },
    "progress-bar-increase": {
      "0%": { left: "-35%", right: "100%" },
      "60%": { left: "100%", right: "-90%" },
      "100%": { left: "100%", right: "-90%" },
    },
    "progress-bar-decrease": {
      "0%": { left: "-200%", right: "100%" },
      "60%": { left: "107%", right: "-16%" },
      "100%": { left: "107%", right: "-16%" },
    },
  },
};

export const standardFlowbiteTheme: CustomFlowbiteTheme = {
  alert: {
    closeButton: {
      color: {
        info: "bg-blue-100 text-blue-500 hover:bg-blue-200 focus:ring-blue-400 dark:bg-blue-200 dark:text-blue-600 dark:hover:bg-blue-300",
        failure:
          "bg-red-100 text-red-500 hover:bg-red-200 focus:ring-red-400 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300",
        success:
          "bg-green-100 text-green-500 hover:bg-green-200 focus:ring-green-400 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300",
        warning:
          "bg-yellow-100 text-yellow-500 hover:bg-yellow-200 focus:ring-yellow-400 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300",
      },
    },
    color: {
      info: "border-blue-500 bg-blue-100 text-blue-700 dark:bg-blue-200 dark:text-blue-800",
      failure:
        "border-red-500 bg-red-100 text-red-700 dark:bg-red-200 dark:text-red-800",
      success:
        "border-green-500 bg-green-100 text-green-700 dark:bg-green-200 dark:text-green-800",
      warning:
        "border-yellow-500 bg-yellow-100 text-yellow-700 dark:bg-yellow-200 dark:text-yellow-800",
      red: "border-red-500 bg-red-100 text-red-700 dark:bg-red-200 dark:text-red-800",
    },
  },
  badge: {
    root: {
      color: {
        blue: "bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-900 group-hover:bg-blue-200 dark:group-hover:bg-blue-300",
      },
    },
  },
  button: {
    base: "border border-transparent group relative flex items-stretch justify-center p-0.5 text-center font-medium transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] focus:z-10 focus:outline-none focus:ring-4",
    inner: {
      base: "flex items-stretch items-center",
    },
    color: {
      failure: [
        "text-white bg-red-600 enabled:hover:bg-red-700 focus:ring-red-400",
        "dark:bg-red-900 dark:enabled:hover:bg-red-800 dark:focus:ring-red-700",
      ].join(" "),
      info: [
        "text-white bg-blue-600 enabled:hover:bg-blue-700 focus:ring-blue-400",
        "dark:bg-blue-900 dark:enabled:hover:bg-blue-800 dark:focus:ring-blue-700",
      ].join(" "),
      primary: [
        "text-white bg-primary-700 enabled:hover:bg-primary-800 focus:ring-primary-300",
        "dark:bg-primary-600 dark:enabled:hover:bg-primary-700 dark:focus:ring-primary-800",
      ].join(" "),
      secondary: [
        "text-white bg-secondary-700 enabled:hover:bg-secondary-800 focus:ring-secondary-300",
        "dark:bg-secondary-600 dark:enabled:hover:bg-secondary-700 dark:focus:ring-secondary-800",
      ].join(" "),
      success: [
        "bg-green-700 text-white focus:ring-green-300 enabled:hover:bg-green-800",
        "dark:bg-green-600 dark:focus:ring-green-800 dark:enabled:hover:bg-green-700",
      ].join(" "),
      warning: [
        "text-black bg-yellow-400 enabled:hover:bg-yellow-500 focus:ring-yellow-300",
        "dark:text-white dark:bg-yellow-700 dark:enabled:hover:bg-yellow-600 dark:focus:ring-yellow-500",
      ].join(" "),
      gray: "text-white bg-gray-600 enabled:hover:bg-gray-700 focus:ring-gray-300 dark:bg-gray-400 dark:enabled:hover:bg-gray-500 dark:focus:ring-gray-800",
    },
    outline: {
      on: "group-hover:bg-opacity-0 group-hover:text-inherit",
      color: {
        failure: [
          "text-red-600 bg-transparent border-current enabled:hover:bg-red-100 focus:ring-red-400",
          "dark:text-red-400 dark:bg-transparent dark:enabled:hover:text-white dark:enabled:hover:bg-red-800 dark:focus:ring-red-700",
        ].join(" "),
        primary: [
          "text-primary-700 bg-transparent border-current enabled:hover:bg-primary-100 focus:ring-primary-300",
          "dark:text-primary-400 dark:bg-transparent dark:enabled:hover:text-white dark:enabled:hover:bg-primary-700 dark:focus:ring-primary-800",
        ].join(" "),
        info: [
          "text-blue-600 bg-transparent border-current enabled:hover:bg-blue-100 focus:ring-blue-400",
          "dark:text-blue-400 dark:bg-transparent dark:enabled:hover:text-white dark:enabled:hover:bg-blue-800 dark:focus:ring-blue-700",
        ].join(" "),
        secondary: [
          "text-secondary-700 bg-transparent border-current enabled:hover:bg-secondary-100 focus:ring-secondary-300",
          "dark:text-secondary-300 dark:bg-transparent dark:enabled:hover:text-white dark:enabled:hover:bg-secondary-700 dark:focus:ring-secondary-800",
        ].join(" "),
        success: [
          "text-green-600 bg-transparent border-current focus:ring-green-300 enabled:hover:bg-green-100",
          "dark:text-green-400 dark:bg-transparent dark:enabled:hover:text-white dark:focus:ring-green-800 dark:enabled:hover:bg-green-700",
        ].join(" "),
        warning: [
          "text-yellow-700 bg-transparent border-current enabled:hover:bg-yellow-100 focus:ring-yellow-300",
          "dark:text-yellow-400 dark:bg-transparent dark:enabled:hover:text-white dark:enabled:hover:bg-yellow-600 dark:focus:ring-yellow-500",
        ].join(" "),
      },
    },
  },
  checkbox: {
    root: {
      base: "h-4 w-4 rounded border border-gray-300 bg-gray-100 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 text-blue-600",
    },
  },
  dropdown: {
    floating: {
      base: "z-10 w-fit rounded-xl divide-y divide-gray-100 shadow overflow-hidden",
      content: "rounded-xl text-sm text-gray-700 dark:text-gray-200",
      target: "w-fit dark:text-white",
    },
    content: "",
  },
  fileInput: {
    field: {
      input: {
        /* Copied verbatim, until `file-` properties were added */
        colors: {
          gray: [
            "border-gray-300 bg-gray-50 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
            "file:!mr-4 file:!py-2 file:!ms-0 file:!pr-4 file:!pl-2 file:!rounded-r-full file:!border-0 file:!text-sm file:!font-semibold file:!transition",
            "file:!bg-gray-200 file:!text-gray-700 file:dark:!bg-gray-900 file:dark:!text-white file:hover:!bg-gray-300 file:hover:!dark:bg-gray-800",
          ].join(" "),
          info: [
            "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
            "file:!mr-4 file:!py-2 file:!ms-0 file:!pr-4 file:!pl-2 file:!rounded-r-full file:!border-0 file:!text-sm file:!font-semibold file:!transition",
            "file:!bg-cyan-200 file:!text-cyan-700 file:dark:!bg-cyan-900 file:dark:!text-white file:hover:!bg-cyan-300 file:hover:!dark:bg-cyan-800",
          ].join(" "),
          failure: [
            "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
            "file:!mr-4 file:!py-2 file:!ms-0 file:!pr-4 file:!pl-2 file:!rounded-r-full file:!border-0 file:!text-sm file:!font-semibold file:!transition",
            "file:!bg-red-200 file:!text-red-700 file:dark:!bg-red-900 file:dark:!text-white file:hover:!bg-red-300 file:hover:!dark:bg-red-800",
          ].join(" "),
          warning: [
            "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
            "file:!mr-4 file:!py-2 file:!ms-0 file:!pr-4 file:!pl-2 file:!rounded-r-full file:!border-0 file:!text-sm file:!font-semibold file:!transition",
            "file:!bg-yellow-200 file:!text-yellow-700 file:dark:!bg-yellow-900 file:dark:!text-white file:hover:!bg-yellow-300 file:hover:!dark:bg-yellow-800",
          ].join(" "),
          success: [
            "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500",
            "file:!mr-4 file:!py-2 file:!ms-0 file:!pr-4 file:!pl-2 file:!rounded-r-full file:!border-0 file:!text-sm file:!font-semibold file:!transition",
            "file:!bg-green-200 file:!text-green-700 file:dark:!bg-green-900 file:dark:!text-white file:hover:!bg-green-300 file:hover:!dark:bg-green-800",
          ].join(" "),
        },
      },
    },
  },
  footer: {
    root: {
      base: "w-full bg-white dark:bg-gray-800 md:flex md:items-center md:justify-between",
    },
    divider: {
      base: "w-full my-6 border-gray-200 sm:mx-auto dark:border-gray-700",
    },
    copyright: {
      base: "text-sm",
    },
  },
  helperText: {
    root: {
      base: "mt-1 text-sm",
    },
  },
  label: {
    root: {
      colors: {
        warning: "text-orange-500 dark:text-orange-700",
      },
    },
  },
  modal: {
    root: {
      show: {
        on: "flex bg-gray-900 bg-opacity-50 dark:bg-opacity-80 backdrop-blur-sm starting-fade",
      },
    },
    header: {
      base: "flex items-start justify-between rounded-t border-b p-5 dark:border-gray-600 overflow-hidden",
      title:
        "text-xl font-medium text-gray-900 dark:text-white overflow-hidden",
    },
    content: {
      base: "relative h-full w-full p-4 md:h-auto starting-fade",
    },
  },
  navbar: {
    root: {
      base: "z-30 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700",
    },
  },
  // Additional customizations are applied in a local theme in this package's <Pagination />
  pagination: {
    pages: {
      selector: {
        active:
          "font-medium bg-gray-200 hover:bg-gray-200 hover:text-gray-500 dark:bg-gray-700 dark:text-white",
      },
    },
  },
  progress: {
    color: {
      default: "bg-primary-600",
      primary: "bg-primary-600",
    },
  },
  select: {
    field: {
      select: {
        colors: {
          gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",
        },
      },
    },
  },
  table: {
    root: {
      base: "w-full text-left text-sm text-gray-600 dark:text-gray-300",
      // shadow:
      //   "absolute left-0 top-0 -z-10 h-full w-full rounded-lg bg-white drop-shadow-md dark:bg-black",
      // wrapper: "relative",
    },
    body: {
      // base: "group/body",
      cell: {
        base: "px-6 py-4 group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg",
      },
    },
    head: {
      base: "group/head text-xs uppercase text-gray-700 dark:text-gray-400",
      cell: {
        base: "bg-gray-50 px-6 py-3 group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg dark:bg-gray-800",
      },
    },
    row: {
      // base: "group/row",
      // hovered: "hover:bg-gray-50 dark:hover:bg-gray-600",
      striped:
        "odd:bg-white even:bg-gray-50 odd:dark:bg-gray-900 even:dark:bg-gray-800",
    },
  },
  tabs: {
    tablist: {
      tabitem: {
        base: "flex items-center justify-center rounded-t-lg p-4 text-sm font-medium first:ml-0 focus:outline-none focus:ring-4 focus:ring-primary-300 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500",
        variant: {
          default: {
            active: {
              on: "bg-gray-100 text-primary-600 dark:bg-gray-800 dark:text-primary-500",
            },
          },
          underline: {
            active: {
              on: "active rounded-t-lg border-b-2 border-primary-600 text-primary-600 dark:border-primary-500 dark:text-primary-500",
            },
          },
          pills: {
            active: {
              on: "rounded-lg bg-primary-600 text-white",
            },
          },
        },
      },
    },
  },
  textInput: {
    field: {
      input: {
        colors: {
          gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",
        },
      },
    },
  },
  textarea: {
    colors: {
      gray: twMerge(
        // Defaults
        "border-gray-300 bg-gray-50 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400",
        // Customizations
        "focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500",
      ),
    },
  },
  // FieldToggle also uses a localized theme to allow for sizing controls via props
  toggleSwitch: {
    // root: {
    //   base: "group flex rounded-lg focus:outline-none",
    //   active: {
    //     on: "cursor-pointer",
    //     off: "cursor-not-allowed opacity-50",
    //   },
    //   label:
    //     "ms-3 mt-0.5 text-start text-sm font-medium text-gray-900 dark:text-gray-300",
    // },
    toggle: {
      // base: "relative rounded-full border after:absolute after:rounded-full after:bg-white after:transition-all group-focus:ring-4 group-focus:ring-cyan-500/25",
      checked: {
        // on: "after:translate-x-full after:border-white rtl:after:-translate-x-full",
        off: "bg-gray-200 border-gray-300 dark:bg-gray-700 dark:border-gray-600",
        //   color: {
        //     blue: "border-cyan-700 bg-cyan-700",
        //     dark: "bg-dark-700 border-dark-900",
        //     failure: "border-red-900 bg-red-700",
        //     gray: "border-gray-600 bg-gray-500",
        //     green: "border-green-700 bg-green-600",
        //     light: "bg-light-700 border-light-900",
        //     red: "border-red-900 bg-red-700",
        //     purple: "border-purple-900 bg-purple-700",
        //     success: "border-green-500 bg-green-500",
        //     yellow: "border-yellow-400 bg-yellow-400",
        //     warning: "border-yellow-600 bg-yellow-600",
        //     cyan: "border-cyan-500 bg-cyan-500",
        //     lime: "border-lime-400 bg-lime-400",
        //     indigo: "border-indigo-400 bg-indigo-400",
        //     teal: "bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4",
        //     info: "border-cyan-600 bg-cyan-600",
        //     pink: "border-pink-600 bg-pink-600",
        //   },
      },
      // sizes: {
      //   sm: "h-5 w-9 min-w-9 after:left-px after:top-px after:h-4 after:w-4 rtl:after:right-px",
      //   md: "h-6 w-11 min-w-11 after:left-px after:top-px after:h-5 after:w-5 rtl:after:right-px",
      //   lg: "h-7 w-14 min-w-14 after:left-1 after:top-0.5 after:h-6 after:w-6 rtl:after:right-1",
      // },
    },
  },
};

export const standardChartColors = {
  blue: {
    100: "#1C64F2",
  },
  purple: {
    100: "#9061F9",
  },
  green: {
    100: "#56D19C",
  },
  pink: {
    100: "#EA5F94",
  },
  gold: {
    100: "#FFD700",
  },
  magenta: {
    100: "#CD34B5",
  },
  orange: {
    100: "#FFB14E",
  },
  lightOrange: {
    100: "#FA8775",
  },
  gray: {
    100: "#D5D5DC",
    700: "#9D9D9F",
  },
};

export const standardChartPalette: string[] = Object.values(
  standardChartColors,
).map((v) => v[100]);
