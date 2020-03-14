import React from 'react';
import GenericForm from './GenericForm';
import SpecificForm from './SpecificForm';

export default function GetAndEdit () {
  return (
    <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', flexDirection: 'column' }}>
      <GenericForm />
      <SpecificForm />
    </div>
  );
}
