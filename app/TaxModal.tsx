import React, { useState, useEffect } from 'react';
import { Modal, View, Text, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import Slider from '@react-native-community/slider';
import styles from './taxModalStyles';

interface TaxModalProps {
  visible: boolean;
  onClose: () => void;
  onDecree: (revenue: number) => void;
}

const TaxModal: React.FC<TaxModalProps> = ({ visible, onClose, onDecree }) => {
  const [lowIncome, setLowIncome] = useState(0);
  const [middleIncome, setMiddleIncome] = useState(0);
  const [highIncome, setHighIncome] = useState(0);
  const [sellIncome, setSellIncome] = useState(0);
  const [previousValues, setPreviousValues] = useState({ lowIncome: 0, middleIncome: 0, highIncome: 0 , sellIncome: 0});
  const [changedSlider, setChangedSlider] = useState<string | null>(null);
  const [decreeEnabled, setDecreeEnabled] = useState(false);

  useEffect(() => {
    if (!visible) {
      // Resetar valores ao fechar o modal
      setLowIncome(previousValues.lowIncome);
      setMiddleIncome(previousValues.middleIncome);
      setHighIncome(previousValues.highIncome);
      setSellIncome(previousValues.sellIncome);
      setChangedSlider(null);
      setDecreeEnabled(false);
    }
  }, [visible]);

  const handleSliderChange = (value: number, slider: string) => {
    if (changedSlider && changedSlider !== slider) {
      // Impedir mudança de mais de um slider por turno
      return;
    }
    setChangedSlider(slider);
    setDecreeEnabled(true);

    if (slider === 'lowIncome') {
      setLowIncome(value);
      if (value === previousValues.lowIncome) {
        setChangedSlider(null);
        setDecreeEnabled(false);
      }
    }
    if (slider === 'middleIncome') {
      setMiddleIncome(value);
      if (value === previousValues.middleIncome) {
        setChangedSlider(null);
        setDecreeEnabled(false);
      }
    }
    if (slider === 'highIncome') {
      setHighIncome(value);
      if (value === previousValues.highIncome) {
        setChangedSlider(null);
        setDecreeEnabled(false);
      }
    }
    if (slider === 'sellIncome') {
      setSellIncome(value);
      if (value === previousValues.sellIncome) {
        setChangedSlider(null);
        setDecreeEnabled(false);
      }
    }
  };

  const handleDecree = () => {
    let revenue = 0;
    revenue += lowIncome * 1;
    revenue += middleIncome * 4;
    revenue += highIncome * 6;
    revenue += sellIncome * 3;
  
    setPreviousValues({ lowIncome, middleIncome, highIncome, sellIncome });
    onDecree(revenue);
  };


  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Impostos</Text>
          <ScrollView>
            <View style={styles.sliderContainer}>
              <View style={styles.sliderColumn}>
                <Text style={styles.textModal}>Baixa Renda</Text>
                <Slider
                  style={styles.slider}
                  minimumValue={0}
                  maximumValue={10}
                  step={1}
                  value={lowIncome}
                  onValueChange={(value) => handleSliderChange(value, 'lowIncome')}
                  disabled={!!changedSlider && changedSlider !== 'lowIncome'}
                />
                <Text style={styles.textModal}>Média Renda</Text>
                <Slider
                  style={styles.slider}
                  minimumValue={0}
                  maximumValue={10}
                  step={1}
                  value={middleIncome}
                  onValueChange={(value) => handleSliderChange(value, 'middleIncome')}
                  disabled={!!changedSlider && changedSlider !== 'middleIncome'}
                />
                <Text style={styles.textModal}>Alta Renda</Text>
                <Slider
                  style={styles.slider}
                  minimumValue={0}
                  maximumValue={10}
                  step={1}
                  value={highIncome}
                  onValueChange={(value) => handleSliderChange(value, 'highIncome')}
                  disabled={!!changedSlider && changedSlider !== 'highIncome'}
                />
                <Text style={styles.textModal}>Imposto sobre Vendas</Text>
                <Slider
                  style={styles.slider}
                  minimumValue={0}
                  maximumValue={10}
                  step={1}
                  value={sellIncome}
                  onValueChange={(value) => handleSliderChange(value, 'sellIncome')}
                  disabled={!!changedSlider && changedSlider !== 'sellIncome'}
                />
              </View>
            </View>
          </ScrollView>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.decreeButton, !decreeEnabled && styles.decreeButtonDisabled]}
              onPress={handleDecree}
              disabled={!decreeEnabled}
            >
              <Text style={styles.decreeButtonText}>Decretar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default TaxModal;
