

import { Component, OnInit, OnDestroy, Input} from '@angular/core';

declare var Trello: any;

@Component({
    selector: 'trello',
    templateUrl: 'index.component.html'
})
export class TrelloComponent implements OnInit, OnDestroy {
    @Input() apiKey;
    ngOnInit() {
        let my_awesome_script = document.createElement('script');
        let path = 'https://api.trello.com/1/client.js?key=' + this.apiKey;
        my_awesome_script.setAttribute('src', path);
        document.head.appendChild(my_awesome_script);
    }
    ngOnDestroy() {

    }

    createBoard() {
        let success = function (successMsg) {
            console.log(successMsg);
        };

        let error = function (errorMsg) {
            console.log("error: " + errorMsg);
        };

        let newBoard =
            { name: "Essence",};

        Trello.post('/boards/', newBoard, success, error);
    }
    createList() {
        let success = function (successMsg) {
            console.log(successMsg);
        };

        let error = function (errorMsg) {
            console.log("error: " + errorMsg);
        };
        let newList =
            {
                name: "tareas",
                idBoard: "582bf8cd0980ef34361a316e",
            };

        Trello.post('/lists/', newList, success, error);
    }
    trello() {
        Trello.authorize({
            type: 'popup',
            name: 'Getting Started Application',
            scope: {
                read: 'true',
                write: 'true'
            },
            expiration: 'never',
            success: this.authenticationSuccess,
            error: this.authenticationFailure
        });
    }
    authenticationSuccess() { console.log('Successful authentication'); }
    authenticationFailure() { console.log('Failed authentication'); }

}