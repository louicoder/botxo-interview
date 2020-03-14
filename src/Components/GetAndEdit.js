import React from 'react';
import GenericForm from './GenericForm';
import SpecificForm from './SpecificForm';
import './styles.scss';

export default function GetAndEdit () {
  return (
    <div className="add-edit-forms-container">
      <SpecificForm />
      <GenericForm />
    </div>
  );
}
