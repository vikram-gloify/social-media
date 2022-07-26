import Chat from "../components/Chat/Chat";
import Routeing from "../navigation/RouterConfig";



function MainLayout() {
    return (
        <div className="mainLayout">
            <Routeing />
            <Chat />
        </div>
    )
}

export default MainLayout;