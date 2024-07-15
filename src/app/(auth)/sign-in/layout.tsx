export const metadata = {
  title: "SignIn to MystryMessage",
  description: "Sign In page for Mystry Message",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
