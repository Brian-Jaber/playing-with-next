import NewTodoForm from "@/components/NewTodoForm"


const DashboardLayout = ({ children }) => {
  //  Render NewTodoForm in layout rather than todos page, otherwise form will wait on todos to load before rendering todos form.
  return (
    <div>
      <h1>dashboard</h1>
      <div>
        <NewTodoForm />
      </div>
      <div>{children}</div>
    </div>
  )
}

export default DashboardLayout