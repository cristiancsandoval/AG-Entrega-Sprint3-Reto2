import styled from 'styled-components'

//Variables de estilos
export const CntrApp = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    transition: all 0.3s ease-in-out;
    background-color: hsl(236, 33%, 92%);
    background-image: url("https://res.cloudinary.com/dbzo53yx4/image/upload/v1645906346/todo-app/bg-desktop-light_hnt2qw.jpg");
    background-repeat: no-repeat;
    background-position: center 0;
    background-attachment: fixed;
    &.dark{
        background-image: url("https://res.cloudinary.com/dbzo53yx4/image/upload/v1645906345/todo-app/bg-desktop-dark_lljqwz.jpg");
        background-color: hsl(235, 21%, 11%);
    }
    @media screen and (max-width:375px) {
        background-image: url("https://res.cloudinary.com/dbzo53yx4/image/upload/v1645906345/todo-app/bg-mobile-light_ob0r5j.jpg");
        &.dark{
            background-image: url("https://res.cloudinary.com/dbzo53yx4/image/upload/v1645906346/todo-app/bg-mobile-dark_qtatnu.jpg");
        }
    }
    >div:first-child{
        width: 500px;
        margin-top: 60px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        h1{
            font-size: 35px;
            color: white;
            letter-spacing: 7px;
            text-align: left;
            text-transform: uppercase;
            flex-grow: 1;
        }
        button{
            background: none;
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        @media screen and (max-width: 510px){
            width: 95%;
            margin-top: 30px;
        }
    }
`

export const CntrList = styled.div`
    width:500px;
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    form{
        width: 100%;
        margin: 40px 0;
        padding: 18px 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        background-color:  hsl(0, 0%, 98%);
        -webkit-box-shadow: 0px 4px 17px 0px rgba(0,0,0,0.3);
        -moz-box-shadow: 0px 4px 17px 0px rgba(0,0,0,0.3);
        box-shadow: 0px 4px 17px 0px rgba(0,0,0,0.3);
        .dark &{
            background-color: hsl(235, 24%, 19%);
        }
        &::before{
            content: "";
            width: 20px;
            height: 20px;
            margin: 0 20px;
            border: solid 1px hsl(233, 11%, 84%);
            border-radius: 50%;
            .dark &{
                border-color: hsl(237, 14%, 26%);
            }
        }
        input{
            margin-right: 10px;
            flex-grow: 1;
            border: none;
            background-color: transparent;
            color: hsl(235, 19%, 35%);
            font-family: 'Josefin Sans', sans-serif;
            font-size: 18px;
            &:focus{
                outline:none;
            }
            &::placeholder{
                color: hsl(236, 9%, 61%);
            }
            .dark &{
                color: hsl(234, 39%, 85%);
                &::placeholder{
                    color: hsl(234, 11%, 52%);
                }
            }
        }
    }
    >div{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        background-color:  hsl(0, 0%, 98%);
        border-radius: 5px 5px 0 0;
        -webkit-box-shadow: 0px 4px 17px 0px rgba(0,0,0,0.3);
        -moz-box-shadow: 0px 4px 17px 0px rgba(0,0,0,0.3);
        box-shadow: 0px 4px 17px 0px rgba(0,0,0,0.3);
        .dark &{
            background-color: hsl(235, 24%, 19%);
        }
        div{
            width: 100%;
            padding: 18px 0;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            border-bottom: solid 1px hsl(236, 33%, 92%);
            background-color:  hsl(0, 0%, 98%);
            .dark &{
               border-color: hsl(237, 14%, 26%);
               background-color: hsl(235, 24%, 19%);
            }
            .btn-select{
                width: 20px;
                height: 20px;
                margin: 0 20px;
                border: solid 1px hsl(233, 11%, 84%);
                border-radius: 50%;
                background: none;
                img{
                    visibility: hidden;
                }
                .dark &{
                    border-color: hsl(237, 14%, 26%);
                }
                &:hover{
                    border: solid 2px transparent;
                    background-image: linear-gradient(hsl(0, 0%, 98%), hsl(0, 0%, 98%)), linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));
                    background-origin: border-box;
                    background-clip:content-box, border-box;
                    .dark &{
                        background-image: linear-gradient(hsl(235, 24%, 19%), hsl(235, 24%, 19%)), linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));
                    }
                }
            }
            p{
                margin-right: 10px;
                flex-grow: 1;
                border: none;
                background-color: transparent;
                color: hsl(235, 19%, 35%);
                font-family: 'Josefin Sans', sans-serif;
                font-size: 18px;
                .dark &{
                    color: hsl(234, 39%, 85%);
                }
                &.alert{
                    text-align: center;
                    font-size: 14px;
                }
            }
            .btn-close{
                width: 20px;
                height: 20px;
                margin: 0 10px;
                background: none;
                border: none;
                visibility: hidden;
            }
            &.completed{
                .btn-select{
                    background-image: linear-gradient(45deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
                    border:none;
                    img{
                        visibility: visible;
                    }
                    &:hover{
                        border:none;
                        background-image: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));
                    }
                }
                p{
                    text-decoration: line-through;
                    color: hsl(236, 9%, 61%);
                    .dark &{
                        color: hsl(234, 11%, 52%);
                    }
                }
            }
            &:hover{
                .btn-close{
                    visibility: visible;
                }
            }
            &:first-child{
                border-radius: 5px 5px 0 0;
            }
        }
    }
    @media screen and (max-width: 510px){
        width: 95%;
    }
`
export const BarraOpciones = styled.nav`
    width:100%;
    padding: 13px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color:  hsl(0, 0%, 98%);
    border-radius: 0 0 5px 5px;
    position: sticky;
    bottom: 0;
    -webkit-box-shadow: 0px 13px 17px 0px rgba(0,0,0,0.3);
    -moz-box-shadow: 0px 13px 17px 0px rgba(0,0,0,0.3);
    box-shadow: 0px 13px 17px 0px rgba(0,0,0,0.3);
    .dark &{
        background-color: hsl(235, 24%, 19%);
    }
    >div{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    >p, button{
        font-size: 13px;
        font-weight: 500;
        color: hsl(236, 9%, 61%);
        .dark &{
            color: hsl(234, 11%, 52%);
        }
    }
    button{
        border: none;
        background:none;
        text-transform: capitalize;
        &:nth-child(1){
            color:hsl(220, 98%, 61%);
            font-weight: 600;
            &:hover{
                color:hsl(220, 98%, 61%);
            }
        }
        &:nth-child(2){
            margin: 0 10px;
        }
        &:hover{
            font-weight: 600;
            color:hsl(235, 19%, 35%);
            .dark &{
                color: hsl(234, 39%, 85%);
            }
        }
        &:nth-child(1){
            color:hsl(220, 98%, 61%);
            font-weight: 600;
            &:hover{
                color:hsl(220, 98%, 61%);
            }
        }
    }
    .active, .completed{
        button:nth-child(1){
            font-weight: 500;
            color: hsl(236, 9%, 61%);
            .dark &{
                color: hsl(234, 11%, 52%);
            }
            &:hover{
                font-weight: 600;
                color:hsl(235, 19%, 35%);
                .dark &{
                    color: hsl(234, 39%, 85%);
                }
            }
        }
    }
    .active{
        button:nth-child(2){
            color:hsl(220, 98%, 61%);
            font-weight: 600;
            &:hover{
                color:hsl(220, 98%, 61%);
            }
        }
    }
    .completed{
        button:nth-child(3){
            color:hsl(220, 98%, 61%);
            font-weight: 600;
            &:hover{
                color:hsl(220, 98%, 61%);
            }
        }
    }
    @media screen and (max-width: 510px){
        position: relative;
        >div{
            width: 100%;
            padding: 13px;
            background-color: hsl(0, 0%, 98%);
            border-radius: 5px;
            position: absolute;
            bottom: -70px;
            left:0;
            -webkit-box-shadow: 0px 9px 17px 0px rgba(0,0,0,0.3);
            -moz-box-shadow: 0px 9px 17px 0px rgba(0,0,0,0.3);
            box-shadow: 0px 9px 17px 0px rgba(0,0,0,0.3);
            .dark &{
                background-color: hsl(235, 24%, 19%);
            }
        }
    }
`

export const DragDropText = styled.h3`
    font-size: 13px;
    font-weight: 500;
    text-align: center;
    margin: 30px 0 ;
    color: hsl(236, 9%, 61%);
    .dark &{
        color: hsl(234, 11%, 52%);
    }
    @media screen and (max-width: 510px){
        margin-top: 80px;
    }
`