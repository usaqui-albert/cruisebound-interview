export function Small({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <p className="text-sm text-gray-500">{children}</p>;
}
