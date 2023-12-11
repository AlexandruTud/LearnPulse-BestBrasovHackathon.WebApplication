import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  private readonly serverUrl: string = 'https://localhost:44329/api';
  constructor(private httpClient: HttpClient) {}

  register(body): Observable<any> {
    return this.httpClient.post(this.serverUrl + '/Register', body);
  }

  login(body): Observable<any> {
    return this.httpClient.post(this.serverUrl + '/Login', body);
  }

  getRole(userId): Observable<any> {
    return this.httpClient.get(this.serverUrl + '/getRole?id=' + userId);
  }

  getAllCourses(): Observable<any> {
    return this.httpClient.get(this.serverUrl + '/Courses/GetAllPublicCourses');
  }

  insertCourse(body): Observable<any> {
    return this.httpClient.post(
      this.serverUrl + '/Courses/InsertCourses',
      body
    );
  }

  addUserPoints(body): Observable<any> {
    return this.httpClient.post('/Points/AddUserPoints', body);
  }

  getTopUsers(): Observable<any> {
    return this.httpClient.get('https://localhost:44329/Points/GetTopUsers');
  }

  getNotes(userId): Observable<any> {
    return this.httpClient.get(
      this.serverUrl + '/Notes/GetNotes?IdUser=' + userId
    );
  }

  insertNote(body): Observable<any> {
    return this.httpClient.post(this.serverUrl + '/Notes/InsertNote', body);
  }

  updateNote(body): Observable<any> {
    return this.httpClient.put(this.serverUrl + '/Notes/UpdateNote', body);
  }

  deleteNote(noteId): Observable<any> {
    return this.httpClient.delete(
      this.serverUrl + '/Notes/DeleteNote?IdNote=' + noteId
    );
  }

  addCourseReview(body): Observable<any> {
    return this.httpClient.post(
      this.serverUrl + '/Reviews/AddCourseReview',
      body
    );
  }

  getComments(courseId): Observable<any> {
    return this.httpClient.get(
      this.serverUrl + '/Reviews/GetComments?IdCourse=' + courseId
    );
  }

  addComment(body): Observable<any> {
    return this.httpClient.post(
      this.serverUrl + '/Reviews/AddCourseComment',
      body
    );
  }

  getUserInfo(userId): Observable<any> {
    return this.httpClient.get(this.serverUrl + '/User?id=' + userId);
  }

  sendEmail(email, subject, body): Observable<any> {
    return this.httpClient.post(
      this.serverUrl +
        '/sendMail?to=' +
        email +
        '&subject=' +
        subject +
        '&body=' +
        body,
      null
    );
  }

  updateRole(body): Observable<any> {
    return this.httpClient.post(this.serverUrl + '/updateRole', body);
  }
}
