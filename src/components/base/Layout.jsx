import TabBar from "@/components/base/TabBar";

function Layout({ children }) {
  return (
    <div className="flex justify-center min-h-svh relative">
      <div className="max-w-[400px] min-w-[430px]  border-x border-[#F3F3F3]">
        {children}
      </div>
      <TabBar />
    </div>
  );
}

export default Layout;
