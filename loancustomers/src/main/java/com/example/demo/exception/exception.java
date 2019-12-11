package com.example.demo.exception;

import org.hibernate.service.spi.ServiceException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import javax.servlet.http.HttpServletRequest;

@ControllerAdvice
    public class exception {

        @ExceptionHandler(ServiceException.class)
        public ResponseEntity<ErrorResponse> rulesForLoanNotFound(HttpServletRequest req, ServiceException e)
        {
            ErrorResponse error = new ErrorResponse();
            error.loanId = ();
            error.message = e.getMessage();
            return new ResponseEntity<ErrorResponse>(error, HttpStatus.NOT_FOUND);
        }
    }

    class ErrorResponse {
        public long loanId;
        public String message;
    }
}
