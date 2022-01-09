type ActionHeaderProps = {
  title: string
  actionName: string
  action?: () => {}
}

const ActionHeader = ({ title, actionName, action }: ActionHeaderProps) => {
  return (
    <div className="pb-5 border-b border-stone-200 sm:flex sm:items-center sm:justify-between">
      <h3 className="text-lg leading-6 font-medium text-stone-900">{title}</h3>
      <div className="mt-3 sm:mt-0 sm:ml-4">
        <button
          onClick={action}
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-stone-50 bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {actionName}
        </button>
      </div>
    </div>
  )
}

export default ActionHeader
