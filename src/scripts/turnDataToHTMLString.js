function turnDataToHTMLString(employees) {
    let HTMLString = employees.map((employee) => {
        return `
        <article class="employee">
            <header class="employee__name">
                <h1>${employee.first_name} ${employee.last_name}</h1>
            </header>
            <section class="employee__department">
                Works as the ${employee.job_title} in our ${employee.department.dept_name}
            </section>
            <section class="employee__computer">
                Currently using a ${employee.computer.make} ${employee.computer.model}
            </section>
        </article>
        `
    })
    return HTMLString.join("")
}

export default turnDataToHTMLString