import Header from "./header";

interface PageLayoutProps {
  children: React.ReactNode;
  currentPage?: string;
}

export default function PageLayout({ children, currentPage }: PageLayoutProps) {
  return (
    <main className="bg-[#1a1a1a] min-h-screen text-white px-6 pb-20">
      <Header currentPage={currentPage} />
      {/* Add padding to account for fixed header */}
      <div className="h-20"></div>
      {children}
    </main>
  );
} 