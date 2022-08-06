export default class Api{

    api(path,method='GET',body=null,requiresAuth=false,credentials=null){
        const url="http://localhost:3000/"+path;
        const options={
            method,
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
        }

        if(body){
            options.body = JSON.stringify(body);
        }
        if(requiresAuth){

        }

        return fetch(url, options);
    }

    async getAllCourses(){

        try{
            let courses = await this.api('api/courses');
            if(courses.status!==200){
                throw new Error(
                    console.log('error')
                )
            }else{
                return courses.json();
            }
        }catch(e){
            console.log(e)
        }
    }       

    async getEnroledCoursesById(id){
        try{
            let crs = await this.api(`api/enrolments/${id}`);
            if(crs.status!==200){
                throw new Error(
                    console.log('err')
                )
            }else{
                return crs.json();
            }
        }catch(e){
            console.log(e)
        }
    }

    async unrolCourseById(id){
        try{
            let del = await this.api(`api/unrol/${id}`, 'DELETE');
            if(del.status!==200){
                throw new Error(
                    console.log('del')
                )
            }else{
                return del.json();
            }
        }catch(e){
            console.log(e);
        }
    }

    async enrolCourseById(id){
        try{
            let add = await this.api(`api/enrol/${id}`, 'PUT');
            if(add.status!==200){
                throw new Error(
                    console.log('error')
                )
            }else{
                return add.json()
            }
        }catch(e){
            console.log(e);
        }
    }

    async getStats(){
        try{
            let stats = await this.api('api/stats');
            if(stats.status!==200){
                throw new Error(
                    console.log('err')
                )
            }else{
                return stats.json();
            }
        }catch(e){
            console.log(e);
        }
    }

    async getStatsById(id){
        try{
            let stats = await this.api(`api/stats/${id}`);
            if(stats.status!==200){
                throw new Error(
                    console.log('err')
                )
            }else{
                return stats.json();
            }
        }catch(e){
            console.log(e)
        }
    }

    async getProfesorCourseById(id){
        try{
            let crs = await this.api(`api/profesor/${id}`);
            if(crs.status!==200){
                throw new Error(
                    console.log('err')
                )
            }else{
                return crs.json();
            }
        }catch(e){
            console.log(e);
        }
    }

    async editCourse(id, course){
        try{
            let edit = await this.api(`api/editCrs/${id}`, 'PUT', course);
            if(edit.status!==200){
                throw new Error(
                    console.log('error')
                )
            }else{
                return edit.json();
            }
        }catch(e){
            console.log(e);
        }
    }

    async deleteCourseById(id){
        try{
            let del = await this.api(`api/deleteCourse/${id}`, 'DELETE');
            if(del.sstatus!==200){
                throw new Error(
                    console.log('error')
                )
            }else{
                return del.json();
            }
        }catch(e){
            console.log(e);
        }
    }

    async createCourse(course){
        try{
            let create = await this.api('api/createCourse', 'POST', course)
            if(create.status!==200){
                throw new Error(
                    console.log('error')
                )
            }else{
                return create.json();
            }
        }catch(e){
            console.log(e)
        }
    }
}