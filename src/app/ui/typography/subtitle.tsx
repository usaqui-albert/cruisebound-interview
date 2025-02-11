export function Subtitle({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <p className="text-gray-600 text-lg font-medium">{children}</p>;
}
