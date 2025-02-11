export function Body({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <p className="font-medium">{children}</p>;
}
