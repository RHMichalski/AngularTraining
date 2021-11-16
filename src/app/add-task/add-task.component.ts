import { ListResolverService } from './../list/list-resolver.service';
import { HttpService } from './../services/http.service';
import { Task } from './../model/Task';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { forbiddensignValidator } from '../shared/new-task.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {

  addtaskForm !: FormGroup;

  constructor(private httpService: HttpService,  private formbuilder: FormBuilder,
    private readonly router: Router) {}

  ngOnInit(): void {
    this.addtaskForm = this.formbuilder.group({
      taskName: ['', [Validators.required, Validators.minLength(1), forbiddensignValidator(/[`\-~!@#$%^&*()_+={}\[\]|\\:\'\/\";“’<,>.?๐฿]+/)]]
    })
  }

  onSubmit() {
    if(this.addtaskForm.status === 'VALID'){
      let task:Task = {name: this.taskName?.value, created: new Date().toLocaleDateString() + ', ' + new Date().toLocaleTimeString(),isDone: false};
      this.httpService.addTask(task).subscribe(() => { this.router.navigate(['/Lista']); });
      this.taskName?.patchValue('');
    }
  }

  get taskName(){
    return this.addtaskForm.get('taskName');
  }
}

