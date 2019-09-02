import { Validators, FormBuilder } from '@angular/forms';

export const getFormGroupMock = () => {
  const formBuilder: FormBuilder = new FormBuilder();
  const formGroupMock = formBuilder.group({
    id: 'ID test',
    uuid: 'UUID test',
    userUuId: 'UserUUID test',
    name: ['Name test', Validators.required],
    description: ['Description test', Validators.required],
    imageFilepath: 'ImageFilePath test',
    imageUrl: 'ImageURL test',
    gender: ['Gender test', Validators.required],
    type: ['Type test', Validators.required],
    color: ['Color test', Validators.required],
    season: ['Season test', Validators.required],
    size: ['Size test', Validators.required],
    booked: [false]
  });

  return formGroupMock;
};

/*
{
    id: new FormControl('ID test'),
    uuid: new FormControl('UUID test'),
    userUuId: new FormControl('UserUUID test'),
    name: new FormControl('Name test', Validators.required),
    description: new FormControl('Description test', Validators.required),
    imageFilepath: new FormControl('ImageFilePath test'),
    imageUrl: new FormControl('ImageURL test'),
    gender: new FormControl('Gender test', Validators.required),
    type: new FormControl('Type test', Validators.required),
    color: new FormControl('Color test', Validators.required),
    season: new FormControl('Season test', Validators.required),
    size: new FormControl('Size test', Validators.required),
    booked: new FormControl(false)
  }
*/

/*
const formBuilder: FormBuilder = new FormBuilder();
  const formGroupMock = formBuilder.group({
    id: 'ID test',
    uuid: 'UUID test',
    userUuId: 'UserUUID test',
    name: ['Name test', Validators.required],
    description: ['Description test', Validators.required],
    imageFilepath: 'ImageFilePath test',
    imageUrl: 'ImageURL test',
    gender: ['Gender test', Validators.required],
    type: ['Type test', Validators.required],
    color: ['Color test', Validators.required],
    season: ['Season test', Validators.required],
    size: ['Size test', Validators.required],
    booked: [false]
  });

  return formGroupMock;
*/

/*
const formGroupMock = {
    id: 'ID test',
    uuid: 'UUID test',
    userUuId: 'UserUUID test',
    name: ['Name test', Validators.required],
    description: ['Description test', Validators.required],
    imageFilepath: 'ImageFilePath test',
    imageUrl: 'ImageURL test',
    gender: ['Gender test', Validators.required],
    type: ['Type test', Validators.required],
    color: ['Color test', Validators.required],
    season: ['Season test', Validators.required],
    size: ['Size test', Validators.required],
    booked: [false]
  };

  return formGroupMock;
*/