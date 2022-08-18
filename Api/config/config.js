import Sequelize from 'sequelize';
import dotenv from 'dotenv';
import user from '../models/user.js';
import enrolment from '../models/enrolment.js';
import course from '../models/course.js';
import book from '../models/book.js';

dotenv.config();

const configDB=()=>{
    
    try{
        let sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.USER_PASSWORD, 
            {
                host: process.env.HOST,
                dialect: process.env.DIALECT
            }
        );


        let db = {
            models:{}
        }

        db.sequelize = sequelize;
        db.Sequelize = Sequelize;
        db.models.user = user(sequelize);
        db.models.enrolment = enrolment(sequelize);
        db.models.course = course(sequelize);
        db.models.book = book(sequelize);

        //creare corsepondente

        db.models.user.hasMany(db.models.enrolment,{
            onDelete: 'CASCADE',
            as: 'fk_user_id',
            foreignKey:{
                fieldName: 'user_id',
                allowNul: false
            },
        });
        db.models.enrolment.belongsTo(db.models.user,{
            as: 'fk_user_id',
            foreignKey:{
                fieldName: 'user_id',
                allowNul: false
            },
        })

        db.models.course.hasMany(db.models.enrolment, {
            onDelete: 'CASCADE',
            as: 'fk_course_id',
            foreignKey: {
                fieldName: 'course_id',
                allowNul: false
            }
        })

        db.models.enrolment.belongsTo(db.models.course,{
            as: 'fk_course_id',
            foreignKey:{
                fieldName: 'course_id',
                allowNul: false
            }
        })

        db.models.user.hasMany(db.models.book,{
            onDelete: 'CASCADE',
            as: 'fk_username_id',
            foreignKey:{
                fieldName: 'username_id',
                allowNul: true
            }
        })

        db.models.book.belongsTo(db.models.user, {
            as: 'fk_username_id',
            foreignKey: {
                fieldName: 'username_id',
                allowNul: true
            }
        })


        return db;
    }catch(e){
        throw new Error(e);
    }
}

let db = configDB();
export default db;