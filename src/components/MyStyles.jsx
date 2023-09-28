import styled from 'styled-components';

export const OuterContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    form {
        margin-bottom: 2rem;

        input {
            font-size: 1.2rem;
        }

        button {
            background-color: lightgrey;
        }
    }
    
    .card {
        display: flex;
        flex-direction: column;
        max-width: 600px;
        border: none;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        border-radius: 25px;
        padding: 1rem;
        
        h2 {
            margin-top: 0;
        }
        
        .cardInfo {
            display: flex;
            flex-direction: row;
        }
        
        .returnInfo {
            display: flex;
            flex-direction: column;
            text-align: left;
            padding: 1rem;
            
            span {
                margin-bottom: 1rem;
            }
        }
    }  
`