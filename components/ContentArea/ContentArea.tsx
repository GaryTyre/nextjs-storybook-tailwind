import React from 'react'

export type ContentAreaProps = {
    children: React.ReactNode;
  }

  export const ContentArea: React.FC<ContentAreaProps> = ({
    children
  }) => {
    return (
        <div className="flex items-stretch flex-1 min-h-full overflow-hidden">
            <main className="flex-1 overflow-y-auto">
                <div className="p-5 max-w-7xl">
                    <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
                </div>

                <section className="flex flex-col flex-1 min-w-0 p-3 mx-5 text-gray-600 bg-white rounded lg:order-last">
                    { children }
                </section>
            </main>
        </div>
    )
}

export default ContentArea;