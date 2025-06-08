import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import { Card, Col, Container, Row, Form, FormCheck, Button } from 'react-bootstrap'
import Logo from '../../components/widget/logo'
import { Link, useNavigate } from 'react-router-dom'
import authbg from '/assets/images/dashboard/sign-in.jpg'
import { useAuth } from '@/context/AuthContext'
import { LoginRequest } from '@/api/Login/LoginModel'
import {loginAccount} from '@/api/Login/Login'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')
    const { login } = useAuth();
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token'); 

        if (token) {
            navigate('/component');
        }
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setError("");
      setLoading(true);

      try {
        const requestData: LoginRequest = {
            email: email,
            password: password,
        }
        const res = await loginAccount(requestData);

        if (!res) {
          throw new Error("Đăng nhập thất bại");
        }else{
            login(res.data.token)
            setLoading(false);
        }
        navigate("/home");
      } catch (err) {
        setError( "Sai thông tin đăng nhập");
      } finally {
        setLoading(false);
      }
    };
    const success=(credentialResponse)=>{
      const decoded = jwtDecode(credentialResponse?.credential)
      if(decoded){
         login(credentialResponse?.credential)
         navigate("/home");
      }
    }
    return (
      <Fragment>
        <div
          className="login-content"
          style={{
            background: `url(${authbg})`,
            backgroundRepeat: "no-repeat",
            position: "relative",
            backgroundSize: "cover",
          }}
        >
          <Container>
            <Row className="align-items-center justify-content-center vh-100 w-100 m-0">
              <Col lg={5} md={12} className="align-self-center">
                <Card className="p-0 mb-0">
                  <Card.Body className="auth-card">
                    <div className="logo-img">
                      <Link
                        to="/"
                        className="navbar-brand d-flex align-items-center justify-content-center mb-5"
                      >
                        <Logo />
                      </Link>
                    </div>
                    <Form onSubmit={handleSubmit}>
                      <div className="custom-form-field">
                        <Form.Group className="mb-5">
                          <Form.Label className="mb-0">
                            Username Or Email Address&nbsp; <span>*</span>
                          </Form.Label>
                          <Form.Control
                            type="email"
                            className="mb-0"
                            placeholder="Nhập email của bạn"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          ></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-5">
                          <Form.Label className="mb-0">
                            Password&nbsp; <span>*</span>
                          </Form.Label>
                          <Form.Control
                            type="password"
                            className="mb-0"
                            placeholder="Nhập mật khẩu"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          ></Form.Control>
                        </Form.Group>
                        <div className="pb-0">
                          <Button
                            type="submit"
                            disabled={loading}
                            className="w-100"
                          >
                            {loading ? (
                              <span className="d-flex align-items-center justify-content-center">
                                <span
                                  className="spinner-border spinner-border-sm me-2"
                                  role="status"
                                  aria-hidden="true"
                                ></span>
                                Đang đăng nhập...
                              </span>
                            ) : (
                              <>
                                <span className="text d-inline-block align-middle">
                                  Đăng nhập
                                </span>{" "}
                                <span className="icon d-inline-block align-middle ms-1 ps-2">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="8"
                                    height="8"
                                    viewBox="0 0 8 8"
                                    fill="none"
                                  >
                                    <path
                                      d="M7.32046 4.70834H4.74952V7.25698C4.74952 7.66734 4.41395 8 4 8C3.58605 8 3.25048 7.66734 3.25048 7.25698V4.70834H0.679545C0.293423 4.6687 0 4.34614 0 3.96132C0 3.5765 0.293423 3.25394 0.679545 3.21431H3.24242V0.673653C3.28241 0.290878 3.60778 0 3.99597 0C4.38416 0 4.70954 0.290878 4.74952 0.673653V3.21431H7.32046C7.70658 3.25394 8 3.5765 8 3.96132C8 4.34614 7.70658 4.6687 7.32046 4.70834Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </span>
                              </>
                            )}
                          </Button>
                        </div>
                        {
                          error ?? <p>{error}</p>
                        }
                        <div className="pb-0">
                          <GoogleLogin
                            onSuccess={(credentialResponse) => success(credentialResponse)}
                            onError={() => {
                              console.log("Login Failed");
                            }}
                          />
                        </div>
                      </div>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
}

export default Login
