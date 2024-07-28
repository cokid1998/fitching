import TabBar from "@/components/base/TabBar";

function Layout({ children }) {
  return (
    <div className="flex justify-center min-h-svh relative">
      <div className="tablet:max-w-[400px] tablet:min-w-[360px] mobile:w-full tablet:border-x border-[#F3F3F3]">
        {children}
      </div>
      <TabBar />
    </div>
  );
}

export default Layout;
