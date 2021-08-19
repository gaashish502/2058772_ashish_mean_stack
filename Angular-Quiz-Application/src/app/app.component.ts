import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalDirective } from '../../node_modules/ngx-bootstrap';
import { QuestionClass } from './question-class';
import { ToastrService } from 'ngx-toastr';




@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	isQuestionCardShow: boolean = false;
	totalAnswered: number = 0;
	rightAnswer: number;
	questionObj = new QuestionClass();
	@ViewChild('submitModal') submitModal: ModalDirective;
	@ViewChild('addQuestionModal') addQuestionModal : ModalDirective;
	@ViewChild('answerModal') answerModal : ModalDirective;
	@ViewChild('questionForm') questionForm: any;
	@ViewChild('questionTest') questionTest : any;

	constructor( private toastr: ToastrService) { }

	answerArray = [];

	allQuestions: any = [{
		"id": 1,
		"question": "What is the capital city of Nepal?",
		"a": "Kathmandu",
		"b": "Chitwan",
		"c": "Pokhara",
		"d": "Nepalgunj",
		"answer": "a"
	},
	{
		"id": 2,
		"question": "In which country the headquarter of FA located?",
		"a": "Japan",
		"b": "England",
		"c": "France",
		"d": "Nepal",
		"answer": "b"
	},
	{
		"id": 3,
		"question": "Which country won the highest number of world cups?",
		"a": "Germany",
		"b": "Spain",
		"c": "France",
		"d": "Brazil",
		"answer": "d"
	},
	{
		"id": 4,
		"question": "How many time did Brazil win world cup FIFA?",
		"a": "9",
		"b": "6",
		"c": "5",
		"d": "3",
		"answer": "c"
	},
	{
		"id": 5,
		"question": "How many times did Italy win the FIFA world cup?",
		"a": "4",
		"b": "5",
		"c": "6",
		"d": "7",
		"answer": "a"
	},
	{
		"id": 6,
		"question": "How many times Germany and Brazil played the final FIFA match?",
		"a": "2",
		"b": "9",
		"c": "5",
		"d": "7",
		"answer": "d"
	},
	{
		"id": 7,
		"question": "How many football teams have participated in the first football world cup?",
		"a": "4",
		"b": "6",
		"c": "13",
		"d": "3",
		"answer": "c"
	},
	{
		"id": 8,
		"question": "Diego Maradona played how many world cups?",
		"a": "9",
		"b": "6",
		"c": "4",
		"d": "3",
		"answer": "c"
	},
	{
		"id": 9,
		"question": "The number of total matches in Centennial 2016?",
		"a": "32",
		"b": "22",
		"c": "13",
		"d": "31",
		"answer": "a"
	},
	{
		"id": 10,
		"question": "What was the total number of goals in Copa Centenario tournament 2016?",
		"a": "91",
		"b": "65",
		"c": "55",
		"d": "35",
		"answer": "a"
	},


	];

	/**Method call on submit the test */
	submitTest() {
		this.rightAnswer = 0;
		this.totalAnswered = 0;
		for (let i = 0; i < this.allQuestions.length; i++) {
			if ("selected" in this.allQuestions[i] && (this.allQuestions[i]["selected"] != null)) {
				this.totalAnswered++;
				if (this.allQuestions[i]["selected"] == this.allQuestions[i]["answer"]) {
					this.rightAnswer++;
				}
			}

		}
		this.submitModal.show();

	}

	startQuiz() {
		for (let i = 0; i < this.allQuestions.length; i++) {
			if ("selected" in this.allQuestions[i]) {
				delete this.allQuestions[i]["selected"];
			}

		}
		this.questionTest.reset();
		this.isQuestionCardShow = true;

	}
	HomePage() {
		this.isQuestionCardShow = false;
	}
	addQuestion(){
		this.addQuestionModal.show();
	}
	

	ngOnInit() {



	}

}
