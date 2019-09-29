import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AdminService } from '../services/admin.service';
import { NotificationService } from '../header/service/notification.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})

export class AdminComponent implements OnInit {

  public genders: string[] = ['male', 'female'];
  public uploadForm: FormGroup;
  public selectedFile: any;
  public formData: any;

  constructor(
    private adminService: AdminService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.onFormUpload();
  }

  public onFormUpload(): void {
    this.uploadForm = new FormGroup({
      id: new FormControl(''),
      uuid: new FormControl(''),
      userUuId: new FormControl(''),
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      imageFilepath: new FormControl(''),
      imageUrl: new FormControl(''),
      gender: new FormControl('male', Validators.required),
      type: new FormControl('', Validators.required),
      color: new FormControl('', Validators.required),
      season: new FormControl('', Validators.required),
      size: new FormControl('', Validators.required),
      booked: new FormControl(false)
    });
  }

  public onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] as File;
  }

  public onSubmit(): void {
    if (this.uploadForm.valid) {
      this.formData = new FormData();
      this.formData.append('image', this.selectedFile, this.selectedFile.name);
      this.formData.append('data', JSON.stringify(this.uploadForm.value));

      this.adminService
        .sendItemToServer(this.formData)
        .subscribe(response => {
          if (response.message === 'Success!') {
            this.notificationService.onSuccess('The file has been uploaded!');
          } else {
            this.notificationService.onSuccess('Connection failed, please try again!');
          }
        });
    }
  }

}
