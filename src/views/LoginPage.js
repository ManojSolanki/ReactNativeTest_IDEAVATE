import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import { Input, Button } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Styles from '../res/Styles';
import Colors from '../res/Colors';
import Strings from '../res/Strings';
import { ClickableLabel } from '../component/Common/ClickableLabel';
import { Utils } from '../Utils/Utils';
import { LoginService } from '../Service/LoginService';
import { CustomToast } from '../component/Common/CustomToast';
import { ServerConstants } from '../Service/ServerConstants';
import NavigationService from '../component/navigation/NavigationService';
import Loader from '../component/Common/Loader';
import Images from '../res/Images';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'test@ideavate.com',
      password: 'ideavate@123',
      errorEmail: '',
      errorPassword: '',
      loading: false
    };
  }

  // Handle Login Button Press
  onButtonPress() {
    const { email, password } = this.state;
    if (this.isValid()) {
      const serverResponse = LoginService.validateUserCredentials(email, password);
      if (serverResponse.status === ServerConstants.SUCCESS) {
        this.setState({ loading: true });
        setTimeout(() => {
          this.setState({ loading: false });
          NavigationService.replace('DashboardPage');
        }, 2000);
      } else {
        CustomToast.showError(serverResponse.message);
      }
    }
  }

  render() {
    const { password, email, errorEmail, errorPassword, loading } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <KeyboardAwareScrollView contentContainerStyle={Styles.flex1}>
          <View style={Styles.loginContainer}>
            <View
              style={Styles.imageContainer}
            >
              {/*  App Logo  */}
              <Image
                source={Images.logo}
                style={Styles.imageStyle}
              />
            </View>
            <View
              style={Styles.viewContainer}
            >
              { /*  Email Field  */}
              <Input
                returnKeyType={Strings.componentKeyboard.next}
                placeholder={Strings.email}
                placeholderTextColor={Colors.primaryText}
                inputStyle={Styles.textStyle}
                inputContainerStyle={Styles.inputContainerStyle}
                autoCapitalize={Strings.componentKeyboard.none}
                autoCorrect={false}
                keyboardType={Strings.componentKeyboard.emailAddress}
                errorMessage={errorEmail}
                onChangeText={value => this.setState({ email: value })}
                value={email}
              />
              { /*  Password Field  */}
              <Input
                returnKeyType={Strings.componentKeyboard.done}
                placeholder={Strings.password}
                placeholderTextColor={Colors.primaryText}
                secureTextEntry
                inputStyle={Styles.textStyle}
                inputContainerStyle={Styles.inputContainerStyle}
                errorMessage={errorPassword}
                onChangeText={value => this.setState({ password: value })}
                value={password}
              />
              {/*  Forgot Password View */}
              <View
                style={Styles.forgotPasswordContainer}
              >
                <Text style={Styles.textStyle}>{Strings.forgot}</Text>
                <ClickableLabel
                  text={Strings.email}
                  onPress={() => {
                    // Handle Button Press
                  }}
                />
                <Text style={Styles.textStyle}> {Strings.or}</Text>
                <ClickableLabel
                  text={Strings.password}
                  onPress={() => {
                    // Handle Button Press
                  }}
                />
              </View>

              {/*  Login Button */}
              <Button
                type={Strings.componentButton.solid}
                title={Strings.logIn}
                containerStyle={Styles.buttonStyle.containerStyle}
                buttonStyle={Styles.buttonStyle.buttonStyle}
                titleStyle={Styles.buttonStyle.titleStyle}
                onPress={this.onButtonPress.bind(this)}
              />

              {/*  Sign Up User View */}
              <View
                style={Styles.newUserContainer}
              >
                <Text style={Styles.textStyle}>{Strings.dontHaveAnAccount}</Text>
                <ClickableLabel
                  text={Strings.signUp}
                  onPress={() => {
                    // Handle Button Press
                  }}
                />
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
        <Loader
          loading={loading}
          textColor={Colors.primaryText}
        />
      </View>
    );
  }

  // Validate email and password
  isValid() {
    const { email, password } = this.state;
    if (email.length === 0) {
      this.setState({ errorEmail: Strings.errorMessage.emptyEmail });
      return false;
    } else if (!Utils.validateInputEmail(email)) {
      this.setState({ errorEmail: Strings.errorMessage.invalidEmail });
      return false;
    } else if (password.length === 0) {
      this.setState({ errorPassword: Strings.errorMessage.emptyPassword, errorEmail: Strings.blank });
      return false;
    } else if (!Utils.validateInputPassword(password)) {
      this.setState({ errorPassword: Strings.errorMessage.invalidPassword, errorEmail: Strings.blank });
      return false;
    }
    this.setState({ errorPassword: Strings.blank, errorEmail: Strings.blank });
    return true;
  }
}
