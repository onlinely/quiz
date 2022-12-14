import React, {Component} from 'react'
import classes from './Auth.css'
import Button from "../../components/Ui/Button/Button";

export default class Auth extends Component {

    loginHandler = () => {

    }

    registerHandler = () => {

    }

    submitHandler = event => {
        event.preventDefault()
    }

    render() {
        return(
            <div className={classes.Auth}>
                <div>
                    <h1>Авторизация</h1>
                    <form onSubmit={this.submitHandler} className={classes.Authform}>
                        <input type="text"/>
                        <input type="text"/>

                        <Button
                            type="success"
                            onClick={this.loginHandler}>
                            Войти
                        </Button>
                        <Button
                            type="primary"
                            onClick={this.registerHandler}>
                            Зарегистрироваться
                        </Button>
                    </form>
                </div>
            </div>
        )
    }
}