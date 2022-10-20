import React, {useState, FC} from 'react';
import {
  View,
  Text,
  TextInput,
  Modal,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';

type IModalProps = {
  /** Флаг для открытия модального окна */
  supportOpen: boolean;
  /** Функция, срабатывающая при закрытии модального окна */
  onClose: () => void;
};

/**
 * Компонент представляет собой модальное окно, открывается при нажатии на кнопку 'Поддержка'
 * @param IModalProps
 */
export const SupportModal: FC<IModalProps> = ({onClose, supportOpen}) => {
  const [inputValue, setInputValue] = useState<string>('');

  const inputChangeHandler = function inputChangeHandler(event: string) {
    setInputValue(event);
  };

  const sendButtonClick = () => {
    if (inputValue.trim().length) {
      setInputValue('');
      Alert.alert('Cпасибо за ваш отзыв!');
      onClose();
    } else {
      Alert.alert('Заполните поле перед отправкой');
    }
  };

  return (
    <Modal visible={supportOpen}>
      <View style={styles.modalContainer}>
        <TouchableOpacity
          onPress={() => onClose()}
          style={styles.backButtonContainer}
        >
          <Text style={styles.backButton}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.supportText}>
          Спасибо, что пользуетесь сервисом GoTravel. Вы можете помочь нам стать
          еще лучше! Отправьте ваш отзыв, и мы его обязательно учтем!
        </Text>

        <TextInput
          style={styles.supportInput}
          multiline={true}
          placeholder={'...'}
          value={inputValue}
          onChangeText={inputChangeHandler}
          autoFocus={false}
          textAlignVertical={'top'}
        />
        <TouchableOpacity onPress={() => sendButtonClick()}>
          <View style={styles.supportButton}>
            <Text style={styles.supportButtonText}>Отправить</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  supportText: {
    margin: 7,
    fontSize: 16,
    fontFamily: 'LuxuriousRoman-Regular',
    borderTopWidth: 2,
    borderTopColor: 'black',
  },

  supportInput: {
    padding: 10,
    borderWidth: 2,
    borderColor: '#f0f0f0',
    margin: 7,
    height: '9%',
  },

  supportButton: {
    width: 150,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2BA4FF',
    borderColor: '#ffffff',
    borderWidth: 1,
    margin: 7,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.64,
    shadowRadius: 6.5,
    elevation: 12,
  },

  supportButtonText: {
    color: '#ffffff',
    fontSize: 20,
  },
  modalContainer: {
    flex: 1,
    paddingHorizontal: 4,
  },
  backButtonContainer: {
    marginTop: 40,
  },
  backButton: {
    color: 'black',
    fontFamily: 'TheNautigal-Regular',
    fontSize: 40,
  },
});
