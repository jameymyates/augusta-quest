import Footer from "@/features/ui/footer";
import Header from "@/features/ui/header/header";

const PrimaryLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default PrimaryLayout;
