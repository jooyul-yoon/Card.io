import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Spinner from 'react-spinner-material';
import styled from 'styled-components';
import { TypeLoginForm } from 'types';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 935px;
  width: 100%;
  margin: 0 auto;
  padding: 100px 0;
  min-height: 101vh;
`;
const LeftContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  max-width: 450px;
  width: 50%;
  padding: 32px;
  margin-top: 61px;
`;
const LeftImage = styled.img`
  width: 100%;
`;
const RightContainer = styled.div`
  max-width: 450px;
  width: 50%;
  padding: 0 32px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;
const Input = styled.input`
  all: unset;
  margin: 0.5rem 0;
  padding: 8px 10px;
  margin-bottom: 0.5rem;
  border-radius: 3px;
  box-shadow: rgb(15 15 15 / 20%) 0px 0px 0px 1px inset;
  background: ${(props) => props.theme.inputColor};
  color: rgba(0, 0, 0, 0.87);
  font-size: 0.9rem;
  border: none;
  outline: none;
  &::placeholder {
    font-weight: 100;
  }
`;
const LoginBtn = styled.button`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 10px 0;
  padding: 7px 0;
  background: #66757f;
  outline: 0;
  border: 0;
  border-radius: 3px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 15px;
  font-weight: 500;
  color: white;
  cursor: pointer;
  transition: 0.1s background-color;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  :hover {
    background-color: #525e66;
  }
`;
const Label = styled.label`
  color: ${(props) => props.theme.subTextColor};
  font-size: 12px;
  font-family: 'Noto Sans KR', sans-serif;
`;
const ErrorMessageArea = styled.div`
  font-size: 0.75rem;
  margin-top: 1rem;
  line-height: 1rem;
  color: ${(props) => props.theme.errorTextColor};
`;

function Login() {
  const navigate = useNavigate();
  //   const [isFetching, setIsFetching] = useState(false);
  //   const [isAuthorized, setIsAuthorized] = useState(true);
  //   const isLogin = useRecoilValue(isLoginAtom);
  //   const setIsLogin = useSetRecoilState(isLoginAtom);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TypeLoginForm>();

  //   useEffect(() => {
  //     // if token exist
  //     localStorage.getItem("token") && localStorage.getItem("token") !== ""
  //       ? setIsLogin(true)
  //       : setIsLogin(false);
  //     isLogin && navigate("/");
  //   });

  const onValid = async (data: TypeLoginForm) => {
    console.log(data);
    //     setIsFetching(true);
    //     axios
    //       .post(API_URL + "/auth", { ...data })
    //       .then((response: AxiosResponse) => {
    //         // console.log(response);
    //         setIsFetching(false);
    //         localStorage.setItem(
    //           "token",
    //           JSON.stringify({ token: response.data.token })
    //         );
    //         setIsLogin(true);
    //         navigate("/");
    //       })
    //       .catch((error: AxiosError) => {
    //         console.log("error", error);
    //         setIsFetching(false);
    //         // Case 1. Unauthorized
    //         error.request.status === 401 && setIsAuthorized(false);
    //         //Case 2. Internal server error
    //         error.code === "ERR_NETWORK" && console.log("Internal Server");
    //       });
  };

  return (
    <Wrapper>
      {false && (
        <LeftContainer>
          <LeftImage
            src="https://img.e-chats.com/e/img/552226f2a5fc97ad.png"
            alt="main-left"
          />
        </LeftContainer>
      )}
      <RightContainer>
        <Form onSubmit={handleSubmit(onValid)}>
          <Label>?????????</Label>
          <Input
            {...register('username', {
              required: 'This is Required',
            })}
            placeholder="???????????? ???????????????"
          />
          <Label>????????????</Label>
          <Input
            {...register('password', {
              required: 'This is Required',
            })}
            type="password"
            placeholder="??????????????? ???????????????"
          />
          <LoginBtn type="submit">
            {false ? (
              <Spinner radius={20} color={'#fff'} stroke={1} visible={true} />
            ) : (
              '?????????'
            )}
          </LoginBtn>
          <Label style={{ margin: '5px 0 0 3px' }}>
            <Link to={'/signup'}>????????????</Link>
          </Label>
          {errors.username ? (
            <ErrorMessageArea>???????????? ????????? ?????????.</ErrorMessageArea>
          ) : errors.password ? (
            <ErrorMessageArea>??????????????? ????????? ?????????.</ErrorMessageArea>
          ) : (
            false && (
              <ErrorMessageArea>
                ?????????(????????? ?????? ?????????) ?????? ??????????????? ?????? ??????????????????.
                ???????????? ????????? ?????? ??????????????????.
              </ErrorMessageArea>
            )
          )}
        </Form>
      </RightContainer>
    </Wrapper>
  );
}

export default React.memo(Login);
