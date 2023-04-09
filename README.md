# Todo app 

## **배포 링크 : https://wanted-todo-app.vercel.app/**  

## 소개

회원가입을 한 뒤, 로그인하여 Todo 추가, 수정, 삭제 기능을 이용할 수 있습니다. <br>
로그인을 하지 않으시면 Todo app을 이용하실 수 없습니다.

## 기능 시연 gif

<div>

|                                                          1. 회원가입                                                          |                                                           2. 로그인                                                           |                                                          3. 로그아웃                                                          |
| :---------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/81045794/230766472-0615b960-6801-4dbf-890a-c5f7b04d0cf5.gif" width=250 /> | <img src="https://user-images.githubusercontent.com/81045794/230766611-6ff06d16-4a48-4dff-a719-b654fe37feb8.gif" width=250 /> | <img src="https://user-images.githubusercontent.com/81045794/230766685-d1c80b92-192d-4f5f-b9d7-2f5119d9da77.gif" width=250 /> |

<br>

|                                                          4. Todo 추가                                                          |                                                           5. Todo 수정                                                           |                                                          6. Todo 삭제                                                          |
| :---------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/81045794/230766969-30955e8d-bc9c-402e-b7be-c02ad01c13e7.gif" width=250 /> | <img src="https://user-images.githubusercontent.com/81045794/230767215-4da3d9a9-4f2d-4d1b-bbb8-d47ee81a2b3a.gif" width=250 /> | <img src="https://user-images.githubusercontent.com/81045794/230767376-851c5da9-dc17-42d5-ba93-f3344fa2378b.gif" width=250 /> |

</div>

## Stacks

- React
- TypeScript
- Axios
- Tailwind CSS
- React-Toastify

`배포 -> Vercel`

## 실행 방법

```
git clone https://github.com/hyukzz/wanted-pre-onboarding-frontend.git

npm install

npm start
```

## 폴더 구조

```
📦src
 ┣ 📂@types
 ┃ ┗ 📜types.d.ts
 ┣ 📂api
 ┃ ┣ 📜api.ts
 ┃ ┣ 📜signApi.ts
 ┃ ┗ 📜todoApi.ts
 ┣ 📂assets
 ┃ ┗ 📜signout_icon.png
 ┣ 📂components
 ┃ ┣ 📜Confirm.tsx
 ┃ ┣ 📜SignOut.tsx
 ┃ ┣ 📜TodoCreate.tsx
 ┃ ┣ 📜TodoItem.tsx
 ┃ ┗ 📜TodoList.tsx
 ┣ 📂hooks
 ┃ ┣ 📜useAuth.ts
 ┃ ┣ 📜useRouter.ts
 ┃ ┣ 📜useSignForm.ts
 ┃ ┣ 📜useSignSubmitForm.ts
 ┃ ┗ 📜useTodo.ts
 ┣ 📂pages
 ┃ ┣ 📜SignIn.tsx
 ┃ ┣ 📜SignUp.tsx
 ┃ ┗ 📜Todo.tsx
 ┣ 📂utils
 ┃ ┗ 📜toast.ts
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┣ 📜index.tsx
 ┗ 📜router.tsx
```
