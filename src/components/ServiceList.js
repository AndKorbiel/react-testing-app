export default function ServiceList(props) {
    return (
        <div>
            {props.servicesList && props.servicesList.map(el => {
                return (
                    <li>
                        {el.name}
                    </li>
                )
            })}
        </div>
    )
}