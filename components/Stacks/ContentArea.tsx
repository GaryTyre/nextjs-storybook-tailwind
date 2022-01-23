export type ContentAreaProps = {
    children: React.ReactNode;
  }

  export const ContentArea: React.FC<ContentAreaProps> = ({
    children
  }) => {
    return (
        <div className="flex-1 flex items-stretch overflow-hidden min-h-full">
            <main className="flex-1 overflow-y-auto">
                <div className="max-w-7xl p-5">
                    <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
                </div>

                <section className="min-w-0 flex-1 flex flex-col lg:order-last p-3 bg-white mx-5 rounded text-gray-600">
                    { children }
                </section>
            </main>
        </div>
    )
}