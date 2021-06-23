const { users } = require("../db/config");
var uniqid = require('uniqid');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('users', { 
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
            
        },
        department_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fname:{
            type: DataTypes.STRING,
            allowNull:false
        },
        mname:{
            type: DataTypes.STRING,
            allowNull: false
        },
        lname:{
            type: DataTypes.STRING,
            allowNull: false
        },
        address:{
            type: DataTypes.STRING,
            allowNull: false
        },
        contact_no:{
            type: DataTypes.STRING(12),
            allowNull: false
        },
         password: {
             type: DataTypes.STRING,
             allowNull: false
         },
        image: {
            type: DataTypes.STRING,
            allowNull: true
         },
        person_to_contact: {
            type: DataTypes.STRING,
            allowNull: false
        },
        emergency_contact_no:{
            type: DataTypes.STRING(12),
            allowNull: false
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false
        },
        school_year: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sex: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dateofbirth: {
            type: DataTypes.STRING,
            allowNull: false
        },
        placeofbirth: {
            type: DataTypes.STRING,
            allowNull: false
        },
        religion: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ethnicity: {
            type: DataTypes.STRING,
            allowNull: false
        },
        languages: {
            type: DataTypes.STRING,
            allowNull: false
        },
        guardian: {
            type: DataTypes.STRING,
            allowNull: false
        },
        relguardian: {
            type: DataTypes.STRING,
            allowNull: false
        },
        father: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fatherjob: {
            type: DataTypes.STRING,
            allowNull: false
        },
        mother: {
            type: DataTypes.STRING,
            allowNull: false
        },
        motherjob: {
            type: DataTypes.STRING,
            allowNull: false
        },
        contactfather: {
            type: DataTypes.STRING(12),
            allowNull: false
        },
        contactmother: {
            type: DataTypes.STRING(12),
            allowNull: false
        },
        homecontact: {
            type: DataTypes.STRING(12),
            allowNull: false
        },
        boardingcontact: {
            type: DataTypes.STRING(12),
            allowNull: false
        },
        f_email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        f_education: {
            type: DataTypes.STRING,
            allowNull: false
        },
        f_comp_address:{
            type: DataTypes.STRING,
            allowNull: false
        },
        m_education: {
            type: DataTypes.STRING,
            allowNull: false
        },
        m_comp_address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        m_email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        together:{
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return User;
}