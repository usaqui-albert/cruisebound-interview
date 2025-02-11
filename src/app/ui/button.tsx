export function Button({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <button disabled className="bg-blue-600 px-3 rounded-md">
      {children}
    </button>
  );
}
