import navValues from "../navigation/navValues";


const ComponentPicker = ({ currentNavLocation}: any) => {
    switch (currentNavLocation) {
        case navValues.home:
            return <span>Home page</span>;
        case navValues.todos:
            return <span>Todo page</span>;
        default:
            return (
                <h3>
                    No Component found.
                </h3>
            );
    }
};


export default ComponentPicker;