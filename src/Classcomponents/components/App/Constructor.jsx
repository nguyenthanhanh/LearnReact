import { PureComponent } from "react";
class TestConstructor extends PureComponent {
    constructor(props) {
        super(props);
        this.DEFAULT_MAX_LENGTH = 10;
        this.state = {
            productList: [],
        }
    }
}