# **Welcome to the PLC API**

**USING THE API**

* When using the API version of this application it is recommended that you use POSTMAN
* In order to created *any* POST request via the API you **MUST** authenticate with your API token prior to creating a reqest
* In order to create a POST request please use the following format:

****

**Creating A User:**
*POST: /users*

```
{ "user": 

{
	"username": "username",
	"email": "email@email.com",
	"password": "password"
}

}
```
Response:
```
{
    "id": 3,
    "username": "username",
    "email": "email@email.com",
    "password_digest": "$2a$10$N51XStF/eSvVxGUi3uJmlOnZEs1VV04n9/0tqwlDfWwETbkLGwu0q",
    "api_token": "6VuoYpMSYp3AYi7j3VUgaJkt",
    "admin": null,
    "created_at": "2018-09-26T14:38:05.513Z",
    "updated_at": "2018-09-26T14:38:05.513Z"
}

```

*Note: Upon adding a user a unique API token is auto-generated*

**Creating A Question:**
*POST: /quizzes/:quiz_id/questions*

```
{
        "text": "Is this fun?",
        "quiz_id": 1
    }

```
Response:
```
{
    "id": 8,
    "text": "Is this fun?",
    "quiz_id": 1,
    "created_at": "2018-09-26T14:30:55.224Z",
    "updated_at": "2018-09-26T14:30:55.224Z"
}
```
**Creating An Answer**
*POST: /quizzes/:quiz_id/questions/:question_id/answers*

```
{
        "text": "No",
        "question_id": 7,
        "correct": "FALSE",
        "quiz_id": 1
    }
```
Response
```
{
    "id": 25,
    "text": "No",
    "question_id": 8,
    "correct": false,
    "created_at": "2018-09-26T14:35:16.283Z",
    "updated_at": "2018-09-26T14:35:16.283Z"
}
```

**Getting A Score**
*POST /api/scores*
Request:
```
{
    "score": {
    	"id":1,
            "answers": [{
                    "answer": 3
                },
                {
                    "answer": 2
                    
                },
                    {
                        "answer": 6
                
                }
                
            ]
        }
    }
```

Response:
```
{
    "result": {
        "user_id": 1,
        "quiz_id": 1,
        "result": 33
    }
}
```


****
**ENDPOINTS:**

GET: /api/session/new ・ api/sessions#new

DELETE: /api/session  ・api/sessions#destroy

POST: /api/session ・ api/sessions#create

GET: /api ・ api/quizzes#index

GET: /api/users ・ api/users#index

POST: /api/users ・ api/users#create

GET: /api/users/:id ・ api/users#show

PATCH: /api/users/:id ・ api/users#update

PUT: /api/users/:id ・ api/users#update

DELETE: /api/users/:id ・api/users#destroy

GET: /api/scores ・ api/scores#index

POST: /api/scores ・ api/scores#create

GET	/api/scores/:id ・ api/scores#show

GET: /api/quizzes/:quiz_id/questions/:question_id/answers ・ api/answers#index

POST: /api/quizzes/:quiz_id/questions/:question_id/answers ・ api/answers#create

GET: /api/quizzes/:quiz_id/questions/:question_id/answers/:id ・ api/answers#show

PATCH: /api/quizzes/:quiz_id/questions/:question_id/answers/:id ・ api/answers#update

PUT: /api/quizzes/:quiz_id/questions/:question_id/answers/:id ・ api/answers#update

DELETE: /api/quizzes/:quiz_id/questions/:question_id/answers/:id ・ api/answers#destroy
