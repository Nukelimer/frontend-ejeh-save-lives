// import { useTheme } from "next-themes"
// import { Toaster as Sonner, ToasterProps } from "sonner"

// const Toaster = ({ ...props }: ToasterProps) => {
//   const { theme = "system" } = useTheme()

//   return (
//     <Sonner
//       theme={theme as ToasterProps["theme"]}
//       className="toaster group !bg-green-400"
//       style={
//         {
//           "--normal-bg": "var(--popover)",
//           "--normal-text": "var(--popover-foreground)",
//           "--normal-border": "var(--border)",
//         } as React.CSSProperties
//       }
//       {...props}
//     />
//   )
// }

// export { Toaster }
import { useTheme } from "next-themes";
import { Toaster as Sonner, ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
        const { theme = "system" } = useTheme();

        return (
                <Sonner
                        theme={theme as ToasterProps["theme"]}
                        className="toaster group"
                        toastOptions={{
                                style: {
                                        background: "#fef2f2", // Light red
                                        color: "#991b1b", // Dark red text
                                        border: "1px solid #fca5a5",
                                        borderRadius: "8px",
                                        padding: "16px",
                                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
                                },
                                className: "custom-toast"
                        }}
                        {...props}
                />
        );
};

export { Toaster };

