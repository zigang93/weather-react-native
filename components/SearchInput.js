import React, {Component} from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';

class SearchInput extends Component {

  // option protypes
  static propTypes = {
    onSubmit: PropTypes.func.isRequired, 
    placeholder: PropTypes.string,
  };

  static defaultProps = { 
    placeholder: '',
  };

  state = {
    text: ''
  }

  handleChangeText = (text) => { 
    this.setState({ 
      text: text
    }) 
  };

  handleSubmitEditing = () => {

    const { onSubmit } = this.props;
    const { text } = this.state;

    if (!text) return;

    onSubmit(text);
    this.setState({ text: '' });
  };

  render() {

    const { placeholder } = this.props;
    const { text } = this.state;

    return (
      <View style={styles.container}>
        <TextInput
          autoCorrect={false} 
          placeholder={placeholder}
          placeholderTextColor="white" 
          underlineColorAndroid="transparent" 
          style={styles.textInput} 
          clearButtonMode="always"
          onChangeText={this.handleChangeText}
          onSubmitEditing={this.handleSubmitEditing}
          value={text}
        />
      </View>
    )
  }

}

const styles = StyleSheet.create({ 
  container: {
    height: 40,
    marginTop: 20,
    backgroundColor: '#666',
    marginHorizontal: 60,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  textInput: {
    flex: 1,
    color: 'white',
  }
});



export default SearchInput;